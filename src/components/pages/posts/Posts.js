import React, { useEffect, useState } from "react";
import PostModal from "./PostModal";
import { FcAddDatabase } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./PostCard";
import { deletePosts, getAllPosts } from "../../../redux/posts/postActions";


const Posts = () => {
  const dispatch = useDispatch();
  const [showPostModal, setShowPostModal] = useState(false);

  const handlePostModal = () => {
    setShowPostModal(!showPostModal);
  };

  const posts = useSelector((state) => state.postReducer.posts);
 
 

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  
  const deletePost = (id) => {
    dispatch(deletePosts(id))
  }

 

  return (
    <div className="post-wrapper">
      <button className="post__show-modal-btn" onClick={() => handlePostModal()}>
        <FcAddDatabase />
      </button>
      <div>{showPostModal ? <PostModal /> : null}</div>
      <div> 
      {posts.map((post, i) => ( 
        <PostCard 
        key={i}
        title={post.title}
        content={post.content}
        deletePost={deletePost}
        id={post.id}
        date={post.date}
        />
      ))}
      </div>
    </div>
  );
};

export default Posts;
