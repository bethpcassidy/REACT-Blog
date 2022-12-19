import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { LogoutLink } from "./LogoutLink";
import Snowfall from "react-snowfall";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Login } from "./Login";
import { Signup } from "./Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<PostsIndex />} />
          <Route path="/Posts-New" element={<PostsNew />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Snowfall
        snowflakeCount={80}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      />
    </div>
  );
}

export default App;
