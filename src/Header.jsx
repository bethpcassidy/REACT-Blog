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
            <a class="dropdown-item" href="#">
              Home
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#posts-index">
              All Posts
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#posts-new">
              {" "}
              New Posts{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
