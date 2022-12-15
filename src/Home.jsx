import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Home() {
  const [currentPost, setCurrentPost] = useState({});
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <h2>{currentPost.title}</h2>
        <h4>{currentPost.body}</h4>
      </Modal>
      <Login />
      <Signup />
      <PostsNew />
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
    </div>
  );
}
