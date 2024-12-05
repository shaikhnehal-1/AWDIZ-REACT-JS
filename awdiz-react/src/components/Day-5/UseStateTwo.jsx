import { useEffect, useState } from "react";

function UseStateTwo() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  function toggleLogin() {
    setIsUserLoggedIn(!isUserLoggedIn);
  }
//   function Login() {
//     setIsUserLoggedIn(true)
//   }
//   function Logout() {
//     setIsUserLoggedIn(false)
//   }

  useEffect(() => {
    alert("Login & Logout");
  })

  return (
    <div>
      {isUserLoggedIn ? (
        <div>
            <h1>Welcome!</h1>
            <button onClick={toggleLogin}>Logout</button>
        </div>
      ) : (
        <div>
            <h1>Please Login to continue.</h1>
            <button onClick={toggleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default UseStateTwo;

//ternary operator
//condition? Statement 1 : Statement 2
