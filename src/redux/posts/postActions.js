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
  // let postArray = []
  // return (dispatch) => {
  //   FirebaseDatabase
  //   .collection("posts")
  //   .get()
  //   .then((post) =>
  //    post.forEach(doc => {
  //     postArray.push({id: doc.id, data: doc.data()})
  //   }))
  //   .then((post) => dispatch({type: "GET_POSTS", payload: post}))
  //   .catch((error) => dispatch({type: "ERROR", payload: error}))
  // }

  // return (dispatch) => {
  //   FirebaseDatabase.collection("posts")
  //     .get()
  //     .then((snapshot) => {
  //       const postArr = [];
  //       snapshot.forEach((doc) => {
  //         const data = doc.data();
  //         postArr.push(data);
  //       });
  //     })
  //     .then((posts) => {
  //       dispatch({ type: "GET_POSTS", payload: posts });
  //     })
  //     .catch((error) => {
  //       dispatch({ type: "ERROR", payload: error });
  //     });
  // };
  // .then(response => {
  //   const allPosts = response.docs.forEach(doc => {
  //     if(doc.exists){
  //       allPosts.push({id: doc.id, data: doc.data()})
  //     }
  //   })
  //   dispatch({type: "GET_POSTS"}, allPosts)
  // })
};
//3.removePosts
