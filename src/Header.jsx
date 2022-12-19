import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      {/* <header>
        <a href="#">Home</a> | <a href="#posts-index">All Posts</a> | <a href="#posts-new"> New Posts </a>
      </header>
    </div>
     */}
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Menu
        </button>
        <ul class="dropdown-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts-index">Posts</Link>
          </li>
          <li>
            <Link to="/posts-new">New Post</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
