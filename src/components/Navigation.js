// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { withRouter, Link } from "react-router-dom";
// import firebase from "../firebase/Config";
// import { logoutUser } from "../redux/userActions";

// const Navigation = (props) => {
//   const [userState, setUserState] = useState(null);
//   const signinSelector = useSelector((state) => state.signin);
//   const loginSelector = useSelector((state) => state.login);
//   const dispatch = useDispatch();
//   const logoutUserAction = () => dispatch(logoutUser());

//   useEffect(() => {
//     firebase.getUserState().then((user) => {
//       setUserState(user);
//     });
//   });

//   const logout = async () => {
//     console.log("Logout User");
//     alert("User is logged out");
//     setUserState(null);
//     await logoutUserAction();
//     props.history.replace("/");
//   };

//   let buttons;
//   if (
//     (signinSelector.user && signinSelector.user.hasOwnProperty("user")) ||
//     (loginSelector.user && loginSelector.user.hasOwnProperty("user")) ||
//     userState != null
//   ) {
//     buttons = <button onClick={logout}>Log Out</button>;
//   } else {
//     buttons = <Link to="sign-up">Sign Up</Link>;
//   }

//   return <div>{buttons}</div>;
// };

// export default withRouter(Navigation);

//-------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import { Link, withRouter } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logoutUser } from "../redux/userActions";
// import firebase from "../firebase/Config";
// import Button from "../components/Button";
// import Form from './pages/auth/Form'

// const Navigation = (props) => {
//     const loginSelector = useSelector((state) => state.logIn);
//     const signinSelector = useSelector((state) => state.signIn);
//     const [userState, setUserState] = useState(null);
//     const dispatch = useDispatch();
//     const logoutUserAction = () => dispatch(logoutUser());

//     useEffect(() => {
//       firebase.getUserState().then((user) => {
//         setUserState(user);
//       });
//     });

//     const logout = async () => {
//       console.log("logout user");
//       setUserState(null);
//       await logoutUserAction();
//       props.history.replace("/");
//     };

//     let buttons;
//     if (
//       (loginSelector.user && loginSelector.user.hasOwnProperty("user")) ||
//       (signinSelector.user && signinSelector.user.hasOwnProperty("user")) ||
//       userState != null
//     ) {
//       buttons = (
//         <>
//           <li>
//             <Button buttonSize="medium" className="logout" onClick={logout}>
//               {" "}
//               Log Out{" "}
//             </Button>{" "}
//           </li>
//         </>
//       );
//     } else {
//       buttons = (
//         <>
//           <li>
//             <Link to="/sign-in" className="nav-link" >Sign In</Link>{" "}
//           </li>
//           <li>
//             {" "}
//             <Link to="/log-in" className="nav-link" >Log In</Link>

//           </li>

//         </>
//       );
//     }

//     return (
//         <div>
//             <Form />
//         </div>
//     )
// }

// export default withRouter(Navigation)
