export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <button>Button</button>
      <form>
        <div>
          title: <input type="text" />
        </div>
        <div>
          user: <input type="text" />
        </div>
        <div>
          body: <input type="text" />
        </div>
        <button type="submit">New Post</button>
      </form>
    </div>
  );
}
