import React from 'react'
import { PostCardContainer } from '../styles';
import authService from '../appwrite/auth/configure';
import { Link } from 'react-router-dom';

const PostCard = ({$id,featuresImg,title}) => {
  return (
    <Link to={`posts/${$id}`}>
        <PostCardContainer>
            <div className="post-img-container">
            <img src={authService.getFilePreview(featuresImg
)} alt={title} />
            </div>
            <div className="title-content">{title}</div>
        </PostCardContainer>
    </Link>
  )
}

export default PostCard
