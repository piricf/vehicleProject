import React from "react";

const PostCard = ({ title, content, onDeleteCallback, id }) => {
  // const test = () => {
  //   onDeleteCallback(id)
  // }
  return (
    <div className="post__card-container">
      <div className="row post__card-row">
        <div className="col">
          <div className="post__card-text-wrapper"></div>
          <h1 className="post__card-title">{title}</h1>
          <div className="post__card-content">{content}</div>
          <h3 className="post__card-date">Datum</h3>
          <button onClick={() => onDeleteCallback(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
