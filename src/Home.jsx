import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { PostsShow } from "./PostsShow";

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

  // const handleCreatePost = (params) => {
  //   axios.post("http://localhost:3000/posts.json", params).then((response) => {
  //     setPosts([...posts, response.data]);
  //   });
  // };

  const handleUpdatePost = (id, params) => {
    console.log(5);
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      console.log(6);
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
    });
  };

  const handleDestroyPost = (post) => {
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      handleHidePost();
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <div className="container-short">
        <div className="row">
          {/* <div class="col">
            <Signup />
          </div>
          <div class="col">
            <Login />
            <LogoutLink />
          </div> */}
        </div>
      </div>
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onPostDestroy={handleDestroyPost} />
      </Modal>
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
    </div>
  );
}
