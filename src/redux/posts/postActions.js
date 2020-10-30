import { FirebaseDatabase } from "../../firebase/Config";

//1.addPosts
export const createPost = (post) => {

  let newPost = {
    title: post.title,
    content: post.content,
    date: new Date()
  }
  return (dispatch) => {
    FirebaseDatabase
      .collection("posts")
      .add(newPost)
      .then((post) => dispatch({ type: "CREATE_POST", payload: post }))
      .catch((error) => dispatch({ type: "ERROR", payload: error }));
  };
};

//2.getAllPosts
//3.removePosts
