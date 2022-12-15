import axios from "axios";

export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("made a post!");
    const params = new FormDate(event.target);
    axios.post("http://localhost:300/posts.json", params).then((response) => {
      console.log(response.data);
      event.target.reset();
    });
  };

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
}
