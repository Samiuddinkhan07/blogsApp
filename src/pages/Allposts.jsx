import React,{useEffect,useState} from 'react';
import authService from '../appwrite/auth/configure';
import PostForm from '../components/PostForm/PostForm';
import PostCard from '../components/PostCard';

const Allposts = () => {
  const [posts,setPosts] = useState()
  useEffect(() =>{
    authService.getAllPost([]),then((post) => {
      if(post) setPosts(post.documents)
    })
  },[])
  return (
    <div>
      {posts?.map((post) =>{
        return <PostCard  key={post.$id} post={post}/>
      })}
    </div>
  )
}

export default Allposts
