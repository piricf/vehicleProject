import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/posts/postActions";

const PostCard = () => {
  const dispatch = useDispatch();
  
  const posts = useSelector((state) => state.postReducer.posts);


  useEffect(() => {
    dispatch(getAllPosts())
  },[dispatch])

  // useEffect(() => {
  //   dispatch(getAllPosts())
  //   if(error){
  //     console.log(error)
  //   }
  // }, [error, dispatch])

    // dataDispatched((snapshot) => {
    //   snapshot.forEach((doc) => {
    //     // const data = doc.data("posts");

    //     postArr.push({ id: doc.id, data: doc.data() });
    // setPostItems(postArr);
    // setTitle("");
    // setContent("");
  

  // const postItemElements = posts.map((postItem, i) => (
  //   <div key={i}>{postItem}</div>
  // ));

  // .then((snapshot) => {
  //   snapshot.forEach((doc) => {
  //     const data = doc.data()
  //     posts.push(data)
  //   })
  //})

  // useEffect(() => {
  //   let getAllPostAction = dispatch(getAllPosts(posts))
  //    setPostCard({
  //        ...postCard,
  //        getAllPostAction
  //       })
  // }, [dispatch, postCard, posts])

  return (
    <div className="post__card-container">
      <div className="row post__card-row">
        <div className="col">
          <div className="post__card-text-wrapper"></div>
          <h1 className="post__card-title">title</h1>
          <div className="post__card-content">content</div>
          <h3 className="post__card-date">date</h3>
        </div>
      </div>
    </div>
  );
};

export default PostCard
