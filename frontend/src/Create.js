import React, { useState } from "react";
import Nav from "./Nav";

const Create = () => {
  const [state, setState] = useState({
    title: "",
    content: "",
    user: "",
  });

  const { title, content, user } = state;
  const handleChange = (name) => (event) => {
    console.log("name", name, "event", event.target.value);
    setState({ ...state, [name]: event.target.value });
  };
  return (
    <div>
      <Nav />
      <div className="container p-5">
        <h1>CREATE POST</h1>
        <form>
          <div className="form-group">
            <label className="text-muted">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Post Title"
              required
              onChange={handleChange("title")}
              value={title}
            ></input>
          </div>
          <div className="form-group">
            <label className="text-muted">Content</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Write Something..."
              required
              onChange={handleChange("content")}
              value={content}
            ></textarea>
          </div>
          <div className="form-group">
            <label className="text-muted">User</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
              onChange={handleChange("user")}
              value={user}
            ></input>
          </div>
          <div>
            <button className="btn btn-primary">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
