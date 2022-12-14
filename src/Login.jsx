import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleLogin = (event) => {
    event.preventDefault();
    setErrors([]);
    console.log("handleLogin");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="Login">
      <h1>Login!</h1>
      <form onSubmit={handleLogin}>
        <div>
          Email: <input name="email" type="email" className="form-control" />
        </div>
        <div>
          Password: <input name="password" type="password" className="form-control" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
