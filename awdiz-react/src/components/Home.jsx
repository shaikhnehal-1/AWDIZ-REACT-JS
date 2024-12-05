import { useNavigate } from "react-router-dom";

function Home() {
  const router = useNavigate();
  function goToRegister() {
    router("/register");
  }
  function goToLogin() {
    router("/login");
  }
  function goToUseState() {
    router("/use-state");
  }
  return (
    <div>
      <h1>Home - Explore Home Page.</h1>
      <button onClick={goToRegister}>Go To Register</button>
      <button onClick={goToLogin}>Go To Login</button>
      <button onClick={goToUseState}>Go To UseState</button>
    </div>
  );
}

export default Home;
