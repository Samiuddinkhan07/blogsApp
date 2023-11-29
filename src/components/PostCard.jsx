import React from 'react'
import { PostCardContainer } from '../styles';
import Service from '../appwrite/auth/configure';
import { Link } from 'react-router-dom';

const PostCard = ({$id,featuredImg,title}) => {
  return (
    <Link to={`posts/${$id}`}>
        <PostCardContainer>
            <div className="post-img-container">
            <img src={Service.getFilePreview(featuredImg)} alt={title} />
            </div>
            <div className="title-content">{title}</div>
        </PostCardContainer>
    </Link>
  )
}

export default PostCard
