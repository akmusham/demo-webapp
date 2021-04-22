import React from "react"

function ViewPost(props) {
  //as asked in the interview!
  const {title, body:description} = props;

  return(
    <div className="card">
      <div className="post">
        <img className="post-image" alt="post" src="https://images.unsplash.com/photo-1558435186-d31d126391fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" />
        <div className="post-content">
          <p className="post-header">{title}</p>
          <p className="post-text">
            {description}
          </p>
          <div className="author">
            <img src="https://assets.codepen.io/2642098/internal/avatars/users/default.png?format=auto&height=80&version=1543776877&width=80" alt="new" className="post-author" />
            <div className="author-content">
              <p className="author-name">Özgür Kurucan</p>
              <p className="date">Jun 20, 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPost
