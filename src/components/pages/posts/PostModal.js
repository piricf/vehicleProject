import React, { useState } from "react";
import "./Posts.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../../redux/posts/postActions";
import { Redirect } from "react-router-dom";
import Button from "../../Button";

const PostModal = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [redirect, setRedirect] = useState("");
 

  const createPostSubmit = (e) => {
    e.preventDefault();
    let post = {
      title,
      content,
    };
    dispatch(createPost(post));
    setRedirect(true);
  };

  const redirectTo = redirect;
  if (redirectTo) {
    return <Redirect to="/posts" />;
  }

  return (
    <div className="post-modal">
      <div className="post-modal-menu"> 
      <h1 className="post-modal_heading">Write your own post!</h1>
      <form onSubmit={createPostSubmit}>
        <div className="post-modal-item">
          <input
            type="text"
            placeholder="Add Post title!"
            className="post-modal-input"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="post-modal-item">
          <textarea
            name="content"
            className="text-area"
            placeholder="Add Post content..."
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="post-modal-btn">
            <Button className="btn-wide" buttonColor="blue" type="submit">Create Post</Button>
         </div>
      </form>
      </div>
    </div>
  );
};

export default PostModal;
