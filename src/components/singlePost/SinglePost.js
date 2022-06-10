import React from "react";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div classname="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1654541696500-dd53556473c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit ame.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          deserunt laudantium explicabo dolor repellat, facere quas at tempore
          accusamus dolorum distinctio totam quisquam inventore? Repellat
          expedita quis aperiam voluptatibus corporis aut incidunt quidem
          architecto repudiandae quas ad commodi quibusdam ratione libero
          aliquam eligendi quasi, dolore corrupti excepturi provident. Corrupti
          dolorem delectus, adipisci itaque molestiae odit tenetur enim. Itaque
          nobis temporibus laborum praesentium mollitia id eum, repellat quos
          enim voluptatem eaque vel, sed totam cumque adipisci magnam,
          asperiores architecto impedit! Adipisci officia ipsum voluptatem
          tempora deleniti voluptatibus rem, cum distinctio eos ea quia nam.
          Dolores provident minima quae? Doloremque quis quisquam a nemo
          molestias culpa consequatur et dignissimos. Excepturi tenetur
          explicabo nam sit minus libero praesentium, cum pariatur aperiam
          facilis ad voluptatibus deserunt nulla nemo! Quia odit, aliquid, ipsa
          in magni velit eum, libero explicabo aspernatur eveniet neque! Ea ex
          voluptate illum est obcaecati provident corporis ipsa, aliquam rerum,
          alias aperiam.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
