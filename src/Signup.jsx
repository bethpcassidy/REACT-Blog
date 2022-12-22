import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState(undefined);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        setStatus(error.response.status);
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup!</h1>
      {status ? <img src={`https://http.cat/${status}`} alt="" /> : null}
      <form onSubmit={handleSubmit}>
        <div>
          Name:{" "}
          <input
            name="name"
            type="name"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <small>{20 - name.length} character remaining</small>
        <div>
          Email: <input name="email" type="email" className="form-control" />
        </div>
        <div>
          Password: <input name="password" type="password" className="form-control" />
        </div>
        <div>
          Password Confirmation: <input name="password" type="password" className="form-control" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
