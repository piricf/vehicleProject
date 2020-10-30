import React, { useState } from "react";
import "./Posts.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../../redux/posts/postActions";

const PostModal = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  

  const createPostSubmit = (e) => {
    e.preventDefault();
    let post = {
      title,
      content,
      cover: cover[0],
    };
    dispatch(createPost(post));
  };

  // const test = () => {
  //   firebase.firestore().collection("cities").doc("LA").set({
  //     name: "test"
  //   })
  // }

  return (
    <div className="post-modal-wrapper">
      <h1 className="post-modal-heading"> Posts...</h1>
      <div className="post-modal-item">
        <form onSubmit={createPostSubmit}>
          <label htmlFor="title">Post title:</label>
          <input
            type="text"
            placeholder="Add Post..."
            className="post-modal-input"
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="content">Post Content:</label>
          <textarea
           name="content"
           onChange={(e) => setContent(e.target.value)}
           ></textarea>

          <label htmlFor="cover">Cover</label>
          <input 
          type="file"
          onChange={(e) => setCover(e.target.value)}
          />
          <div className="post-modal-item">
            <button className="post-modal-btn" type="submit">Create Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
