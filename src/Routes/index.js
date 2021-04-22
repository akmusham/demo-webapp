import React,{ useState, useMemo } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from "../Components/Posts/"
import Albums from "../Components/Albums/"
import Users from "../Components/Users/"
import Todos from "../Components/Todos/"
import Navbar from "../Components/Navbar/"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from "../Redux/actions/PostsActions"

function Routes(props) {
  const navItems = [
    {label: "Posts",uri: "/",active: true,count: 0},
    {
      label: "Albums",uri: "/Albums",active: false,enable: false,count: 0,
      subItem: [
        {label: "Users",uri: "/Users",active: false,count: 0},
        {label: "Todo List",uri: "/Todos",active: false,count: 0}
      ]
    }
  ]
  const [routes,setRoutes] = useState(navItems)
  const [posts,setPosts] = useState(props.posts)
  const fetchPost = async(_param) => {
    await props.fetchPosts()
    if(_param.label === "Posts"){
      let newData = [...routes]
      let _Index = newData.findIndex(r=>r.label === "Albums")
      let post_Index = newData.findIndex(r=>r.label === "Posts")
      newData[_Index].enable = true
      // newData[post_Index].count = posts.posts.length
      setRoutes(newData)
    }
  }
  useMemo(() => {
     setPosts(props.posts)
   },[props]);

  return(
    <div>
      <BrowserRouter>
        <Navbar routes={routes} fetchPost={fetchPost} posts={posts.noOfPosts} />
        <Switch>
          <Route exact path="/" component={() => <Posts postsObj={posts} />} />
          <Route path="/Albums" component={() => <Albums />} />
          <Route path="/Users" component={() => <Users />} />
          <Route path="/Todos" component={() => <Todos />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: bindActionCreators(getPosts, dispatch)
});

const mapStateToProps = (state) => ({
    posts: state.PostsReducer
});

export default connect(mapStateToProps,mapDispatchToProps)(Routes)
