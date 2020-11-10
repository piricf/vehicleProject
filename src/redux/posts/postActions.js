import { FirebaseDatabase } from "../../firebase/Config";

//1.addPosts
export const createPost = (post) => {
  let newPost = {
    title: post.title,
    content: post.content,  
    date: new Date(),
  };
  return (dispatch) => {
    FirebaseDatabase.collection("posts")
      .add(newPost)
      .then(() => dispatch({ type: "CREATE_POST", payload: newPost }))
      .catch((error) => dispatch({ type: "ERROR", payload: error }));
  };
};

//2.getAllPosts
export const getAllPosts = () => {
  let allPosts = []
  return (dispatch) => {
    FirebaseDatabase
      .collection("posts")
      .get() 
      .then(snapshot => {
       allPosts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data() 
        }))
        dispatch({type: "GET_POSTS", payload: allPosts})
      })
      .catch((error) => dispatch({ type: "ERROR", payload: error.message }));
  };
};

//3.removePosts
export const deletePosts = (postid) => {
  
  return (dispatch) => {
    FirebaseDatabase
    .collection("posts")
    .doc(postid)
    .delete()
    .then(() => dispatch({type: "DELETE_POSTS"}))
    .catch((error) => dispatch({type: "ERROR", payload: error.message}))
  }
}
