import axios from "axios";

export function PostsNew(props) {
  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response, "creating a post");
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onPostCreate(params);
    event.target.reset();
  };

  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Body: <input name="body" type="text" />
        </div>
        <div>
          Image URL: <input name="image" type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

// return (
//   <div id="posts-new">
//     <h1>New Post</h1>
//     <form onSubmit={handleSubmit}>
//       <div>
//         {/* title: <input type="text" /> */}
//         <div class="mb-3">
//           <label for="exampleInputEmail1" class="form-label">
//             Title
//           </label>
//           <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//           <div id="emailHelp" class="form-text"></div>
//         </div>
//       </div>
//       <div class="mb-3">
//         <label for="exampleInput" class="form-label">
//           Body
//         </label>
//         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//         <div id="emailHelp" class="form-text"></div>
//       </div>
//       <button type="submit" class="btn btn-secondary btn-sm">
//         {" "}
//         New Post
//       </button>
//     </form>
//   </div>
// );
