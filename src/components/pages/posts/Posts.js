import React, { useState } from "react"
import PostModal from "./PostModal"
import {HiPlus} from "react-icons/hi"


const Posts = () => {
  const [showPostModal, setShowPostModal] = useState(false)

 const handlePostModal = () => {
   setShowPostModal(!showPostModal)
 }

  return (
    <div className="post-wrapper">
      <button onClick={() => handlePostModal()}><HiPlus /></button>
      <div >
        {showPostModal ? <PostModal /> : null}
      </div>
    </div>
  )
}

export default Posts