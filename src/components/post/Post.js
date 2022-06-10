import React from "react";
import "./post.css";

const Post = () => {
  return (
    <div class="post">
      <img
        src="https://images.unsplash.com/photo-1653288973812-81d1951b8127?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        necessitatibus nemo quibusdam suscipit facere amet velit? Excepturi
        explicabo qui sequi officiis impedit expedita nemo laudantium veniam
        vero ipsum, aut ipsa! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Laboriosam necessitatibus nemo quibusdam suscipit
        facere amet velit? Excepturi explicabo qui sequi officiis impedit
        expedita nemo laudantium veniam vero ipsum, aut ipsa! Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Laboriosam necessitatibus nemo
        quibusdam suscipit facere amet velit? Excepturi explicabo qui sequi
        officiis impedit expedita nemo laudantium veniam vero ipsum, aut ipsa!
      </p>
    </div>
  );
};

export default Post;
