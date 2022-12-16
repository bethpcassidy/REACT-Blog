import axios from "axios";

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/posts${props.post.id}.json`, params).then((response) => {
      console.log(response.data);
      event.target.reset();
    });
  };

  return (
    <div id="posts-show">
      <h2>{props.post.title}</h2>
      <p> Body {props.post.body}</p>
      <p> Image: {props.post.image} </p>

      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title:{""}
          <input defaultValue={props.post.title} name="title" type="text" />
        </div>
        <div>
          Body: <input defaultValue={props.post.body} name="body" type="text" />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
}
