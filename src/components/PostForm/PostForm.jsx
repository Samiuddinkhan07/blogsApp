import React,{useCallback, useEffect} from 'react'
import {useForm} from 'react-hook-form';
import { Button } from '../../styles';
import Input from '../Input';
import Select from '../Select'
import RTE from '../RTE';
import authService from '../../appwrite/auth/configure';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PostForm = ({post}) => {
    const {register,handleSubmit,watch,setValue,control,getValues} = useForm({
        defaultValues:{
            title:post?.title || "",
            slug:post?.slug || "",
            content:post?.content || "",
            status:post?.status || "",

        }
    })

    const navigate = useNavigate();
    const userData = useSelector((state) => state.user.userData);


    const submit = async (data) =>{
       if(data){
        const file = data.image[0] ? authService.uploadFile(data.image[0]) : null;
        if(file){
            authService.deleteFile(post.featuresImg)
        }
        const dbPost = await authService.updatePost(post.$id,{
            ...data,
            featuresImg:file ? file.$id : undefined,
        })
        if(dbPost){
            navigate(`/post/${dbPost.$id}`)
        }
        else{
            const file = data.image[0] ? await authService.uploadFile(data.image[0])  : undefined;
            if(file){
                const fileId = file.$id;
                data.featuresImg = fileId;
                const postCreate = await authService.createPost({
                    ...data,
                    userId: userData.$id
                })
                if(postCreate){
                    navigate(`/posts/${postCreate.$id}`)
                }
            }
        }
        }
    }

    const slugTransfrom = useCallback((value) => {
        if(value) return value.trim().toLowerCase().replace(/\s+/g, '-');
        return "";
        
    },[]);

    useEffect(() =>{
        const subscription = watch((value,{name}) =>{
            if(name === "title"){
                setValue('slug',slugTransfrom(value.title),{shouldValidate:true});
            }
            return () =>{
                subscription.unsubscribe()
            }
        })
    },[watch,slugTransfrom,setValue])
    
  return (
    <div>
      <form action="" onSubmit={handleSubmit(submit)}>
        <div>
            <Input
            label="Title :"
            placeholder = "Enter Title"
            {...register("title",{required:true})}
            />
            <Input
            label="Slug :"
            placeholder = "Enter Slug"
            {...register("slug",{required:true})}
            onInput ={(e) =>{
                setValue('slug',slugTransfrom(e.target.value),{
                    shouldValidate:true,
                })
            }}
            />
            <RTE
            control={control}
            label="Content :"
            name="content"
            defaultValue={getValues("content")}
            />
        </div>
        <div>
            <Input
            label="Featured Image"
            type="file"
            accept="image/png,image/jpg,image/jpeg,image/gif"
            {...register("image",{required:!post})}
            />

            {post && (
                <div>

                    <img
                    src={authService.getFilePreview(post.featuresImg)}
                    alt={post.title}
                    />
                </div>
            )}
            <Select
            options={["active","inactive"]}
            label="Status"
            {...register("status",{required:true})}
            />
            <Button type='submit'>
                {post ? "Update" : "Submit"}
            </Button>
        </div>
      </form>
    </div>
  )
}

export default PostForm
