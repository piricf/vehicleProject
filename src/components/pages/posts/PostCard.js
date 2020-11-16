import React, {useState } from "react";
import { Redirect } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import "./Posts.css";

const PostCard = ({ title, content, deletePost, id, date }) => {
  const [redirect, setRedirect] = useState("");

  const deletePostById = () => {
    deletePost(id);
    setRedirect(true);
  };

  const redirectTo = redirect;
  if (redirectTo) {
    return <Redirect to="/posts" />;
  }

  return (
    <div className="post__card-container">
      <div className="col">
        <h1 className="post__card-title">{title}</h1>
        <div className="post__card-content">{content}</div>
        <h4 className="post__card-date">Published: {date.toString()}</h4>
        <button className="delete-icon" onClick={() => deletePostById(id)}>
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
