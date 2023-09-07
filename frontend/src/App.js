// import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import axios from 'axios'
import React,{useState, useEffect} from 'react'

function App() {
const [posts, setPosts] = useState([]);
const fetchPosts = () =>{
  axios
  .get(`http://localhost:4000/api/posts`)
  .then(response =>{
    console.log(response);
    setPosts(response.data)
  })
  .catch(error => alert('May mali sa code mo bai'));
} 
useEffect(() => {
    fetchPosts();
  },[])
  return (
    <div>
    <Nav></Nav >
    {
      posts.map((post, i)=>(
        <>
        <h2>Title: {post.title}</h2>
        <p><strong>Slug:</strong> {post.slug}</p>
        <p><strong>content:</strong> {post.content}</p>
        <hr height="100px"></hr>
        </>
      ))
    }
    </div>
  );
}

export default App;
