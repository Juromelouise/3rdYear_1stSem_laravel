import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

const Postlist = ({ post }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        {post.title}
      </Typography> */}
        <Link to={`/post/${post.id}`}>
          <h2>{post.title}</h2>
        </Link>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {post.slug}
        </Typography>
        <Typography variant="subtitle2">{post.content}</Typography>
      </CardContent>
      <Container>
        <Link to={`post/update/${post.id}`}>
          <Button variant="contained" color="secondary">
            Edit
          </Button>
        </Link>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </Container>
    </Card>
  );
};

export default Postlist;
