import React, { useEffect, useState } from "react";
import PostModal from "./PostModal";
import { HiPlus } from "react-icons/hi";
import { useDispatch } from "react-redux";
import PostCard from "./PostCard";

const Posts = () => {
  const dispatch = useDispatch();
  const [showPostModal, setShowPostModal] = useState(false);

  const handlePostModal = () => {
    setShowPostModal(!showPostModal);
  };


  

  return (
    <div className="post-wrapper">
      <button onClick={() => handlePostModal()}>
        <HiPlus />
      </button>
      <div>{showPostModal ? <PostModal /> : null}</div>
      <PostCard />
    </div>
  );
};

export default Posts;
