export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onPostDestroy(props.post);
  };

  return (
    <div id="posts-show">
      <h2>Title {props.post.title}</h2>
      <p> Body {props.post.body}</p>

      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.post.title} name="title" type="text" />
        </div>
        <div>
          Body: <input defaultValue={props.post.body} name="body" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.post.image} name="image" type="text" />
        </div>
        <button type="Submit">Update Post</button>
      </form>
      <button onClick={handleClick}> Delete</button>
    </div>
  );
}
