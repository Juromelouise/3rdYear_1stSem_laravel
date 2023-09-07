// import logo from './logo.svg';
import "./App.css";
import Nav from "./Nav";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    axios
      .get(`http://localhost:4000/api/posts`)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => alert("May mali sa code mo bai"));
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <Nav></Nav>
      <h1 id="post">Posts</h1>
      {posts.map((post, i) => (
        <div className="container">
          <div className="row">
            <div className="col order-first">
              <strong>Title: </strong>
              {post.title}
            </div>
            <div className="col">
              <strong>Slug: </strong>
              {post.slug}
            </div>
            <div className="col order-last">
              <strong>Content: </strong>
              {post.content}
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
