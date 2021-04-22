import React,{useEffect} from "react"
import { useSelector } from 'react-redux';
import Loading from "../../Utility/Loading/"
import ViewPost from "./ViewPost/"
import "./index.css"

function Posts(props) {
  const { postsObj } = props;

    return(
      <div>
        {
          postsObj.isFetching? <Loading /> :
          postsObj.posts.map((each,index)=>{
            return(
              <ViewPost key={index} {...each} />
            )
          })
        }
      </div>
    )
}

export default Posts;
