import { useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();

  function login() {
    localStorage.setItem("access_token", "XXXXXXXX");
    navigate("/");
  }
  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
}
