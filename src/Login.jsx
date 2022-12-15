import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["authorization"] = "Bearer ${jwt}";
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("handleLogin");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Login!</h1>
      <form onSubmit={handleLogin}>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
