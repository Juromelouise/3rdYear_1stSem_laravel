import React, { useState } from "react";
import Nav from "./Nav";
import axios from "axios";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate()

  const [state, setState] = useState({
    title: "",
    content: "",
    user: "",
    slug: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content, user, slug);

    axios
      // .post(`${process.env.REACT_APP_API}/posts`, state)
      .post(`http://localhost:4000/api/posts`, state)
      .then((response) => {
        console.log(response);
        setState({...state,
          title: "",
          content: "",
          user: "",
          slug: "",
        });
        alert(`Post Titled ${response.data.data.title} is created`);
        return navigate("/")
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const { title, content, user, slug } = state;
  const handleChange = (name) => (event) => {
    console.log("name", name, "event", event.target.value);
    setState({ ...state, [name]: event.target.value });
  };
  return (
    <div>
      <Nav />
      <div className="container p-5">
        <Title align ="left" title="CREATE A POST"/>
        <form onSubmit={handleSubmit}>
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
            <label className="text-muted">Slug</label>
            <input
              type="text"
              className="form-control"
              placeholder="Slug"
              required
              onChange={handleChange("slug")}
              value={slug}
            ></input>
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
