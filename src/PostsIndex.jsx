export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1 className="text-center">All Posts</h1>
      <div className="posts row">
        {props.posts.map((post) => (
          <div className="col-4" key={post.id}>
            <h2 className="card-title text-center">{post.title}</h2>
            <div>
              <img src={post.image} className="card-img-top rounded mx-auto d-block" alt="" />
            </div>
            <p className="card-text text-center">{post.body}</p>
            <div className="d-grid gap-2 mx-auto">
              <button className="btn btn-dark" onClick={() => props.onSelectPost(post)}>
                MORE INFO
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
