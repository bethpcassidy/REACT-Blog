function Header() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All Posts</a> | <a href="#posts-new"> New Posts </a>
      </header>
    </div>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form>
        <div>
          title: <input type="text" />
        </div>
        <div>
          user: <input type="text" />
        </div>
        <buttone type="submit">New Post</buttone>
      </form>
    </div>
  );
}

function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      <div className="posts">
        <h2>December 1st</h2>
        <img src="https://media.phillyvoice.com/media/images/08_030718_Snow_Carroll.b952542c.fill-1200x630-c0.jpg"></img>
        <p>User: Gerald</p>
        <button>Button</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h4> honk</h4>
    </div>
  );
}

function Home() {
  return (
    <div>
      <PostsNew />
      <PostsIndex />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
//   <div>
//     <header>
//       <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
//       <form>
//         <label for="title">Post:</label>
//       </form>
//     </header>

//     <div id="posts-new">
//       <h1>New post</h1>
//     </div>

//     <div id="posts-index">
//       <h1>All posts</h1>
//     </div>

//     <footer>
//       <p>Copyright 20XX</p>
//     </footer>
//   </div>
// );
// }

export default App;
