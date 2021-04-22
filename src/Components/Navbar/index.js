import React from "react"
import { Link } from 'react-router-dom';
import "./index.css"

function Navbar(props) {
  const { fetchPost, routes, posts } = props;
  const RenderNavItems = (item,i) => {
    if (item.subItem) {
      return(
        <li className="navbar-dropdown" key={i}>
          <Link to={item.uri} className={`dropdown-toggler ${item.active?"active": ""} ${item.enable?"":"disable-link"}`} data-dropdown="my-dropdown-id">
            {item.label}  {posts} <i className="fa fa-angle-down"></i>
          </Link>
          <ul className="dropdown" id="my-dropdown-id">
            {
              item.subItem.map((obj,index)=>{
                return(
                  <li key={index}><Link className={`${item.active?"active": null}`} to={obj.uri}>{obj.label}</Link></li>
                )
              })
            }
          </ul>
        </li>
      )
    }else{
      return(
        <li key={i} onClick={() => fetchPost(item)} className={`${item.active?"active": null}`}><Link to={item.uri}>{item.label} {posts}</Link></li>
      )
    }
  }

  return(
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <button className="navbar-toggler" data-toggle="open-navbar1">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="#">
            <h4>Demo<span>App</span></h4>
          </a>
        </div>
        <div className="navbar-menu" id="open-navbar1">
          <ul className="navbar-nav">
          {
            routes.map((each,i)=>{
              return RenderNavItems(each,i)
            })
          }
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navbar;
