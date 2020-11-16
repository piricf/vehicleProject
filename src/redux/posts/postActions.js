import { FirebaseDatabase } from "../../firebase/Config";

export const createPost = (post) => {
  let newPost = {
    title: post.title,
    content: post.content,
    date: new Date().toDateString(),
  };
  return (dispatch) => {
    FirebaseDatabase.collection("posts")
      .add(newPost)
      .then((postRef) => { 
      newPost.id = postRef.id
      dispatch({ type: "CREATE_POST", payload: newPost })})
      .catch((error) => dispatch({ type: "ERROR", payload: error }));
  };
};

export const getAllPosts = () => {
  let allPosts = [];
  return (dispatch) => {
    FirebaseDatabase.collection("posts")
      .get()
      .then((snapshot) => {
        allPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch({ type: "GET_POSTS", payload: allPosts });
      })
      .catch((error) => dispatch({ type: "ERROR", payload: error.message }));
  };
};

export const deletePosts = (id, onDeleteSuccess) => {
  return (dispatch) => {
    FirebaseDatabase.collection("posts")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_POSTS" });
        onDeleteSuccess();
      })
      .catch((error) => dispatch({ type: "ERROR", payload: error.message }));
  };
};

//4.updatePost
// export const updatePost = (postId, postData) => {
//   let updatePost = {
//     title: postData.title,
//     content: postData.title,
//     date: new Date(postData.date).toDateString()
//   }
//   return (dispatch) => {
//     FirebaseDatabase
//     .collection("posts")
//     .doc(postId)
//     .set(
//       updatePost,
//     {merge: true})
//     .then(() => dispatch({type: "UPDATE_POST", payload: updatePost}))
//     .catch((error) => dispatch({type: "ERROR", payload: error}))
//   }
// }
