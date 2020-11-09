import React, { useEffect, useState } from "react";
import PostModal from "./PostModal";
import { HiPlus } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./PostCard";
import { getAllPosts } from "../../../redux/posts/postActions";

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
  
  const onDeleteCallback = (id) => {
    console.log(id)
  }

  return (
    <div className="post-wrapper">
      <button onClick={() => handlePostModal()}>
        <HiPlus />
      </button>
      <div>{showPostModal ? <PostModal /> : null}</div>
      <div> 
      {posts.map((post, i) => ( 
        <PostCard 
        key={i}
        title={post.title}
        content={post.content}
        onDeleteCallback={onDeleteCallback}
        id={post.id}
        // date={post.date}
        />
      ))}
      </div>
     
    </div>
  );
};

export default Posts;
