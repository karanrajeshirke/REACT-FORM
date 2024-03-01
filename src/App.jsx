import { useState } from "react";

import "./App.css";

function App() {
  let [isSubmitted, setIsSubmitted] = useState(false);
  let [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleInput(event) {
    setData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault;
    setIsSubmitted(true);
  }

  return (
    <>
      <form>
        name:
        <input type="text" name="name" onChange={handleInput} />
        <br />
        email:
        <input type="email" name="email" onChange={handleInput} />
        <br />
        password
        <input type="password" name="password" onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <h1>1</h1>
      {isSubmitted ? (
        <div>
          <h4>{data.name}</h4>
          <h4>{data.email}</h4>
          <h4>{data.password}</h4>
        </div>
      ) : null}
    </>
  );
}

export default App;
