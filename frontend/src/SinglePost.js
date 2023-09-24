import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";


const SinglePost = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  console.log();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/posts/${id}/edit`)
      .then((response) => {
        setPost(response.data);
        console.log(response);
      })
      .catch((error) => {});
  });
  return (
    <div align="center">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
              {post.title}
            </Typography>
            {/* <Link to={`/post/${post.id}`}><h2>{post.title}</h2></Link> */}
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {post.slug}
            </Typography>
            <Typography variant="subtitle2">{post.content}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
    </div>
  );
};

export default SinglePost;
