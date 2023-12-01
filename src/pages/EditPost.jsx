import React,{useEffect,useState} from 'react';
import authService from '../appwrite/auth/configure';
import PostForm from '../components/PostForm/PostForm';
import { useParams,useNavigate } from 'react-router-dom';

const EditPost = () => {
    const [posts,setPosts] = useState();
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        if(slug){
            authService.getSinglePost(slug).then((post) => {
                setPosts(post)
            })
        } else{
            navigate("/")
        }
    },[slug,navigate])
  return posts ? (
    <div>
        <div>
            <PostForm post={posts}/>
        </div>
    </div>
  ) : "Cannot Load post"
}

export default EditPost
