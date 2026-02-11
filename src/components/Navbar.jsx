import { Link, useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("access_token");
    navigate("/login");
  }
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <button onClick={logout}>Logout</button>
        </ul>
      </nav>
    </div>
  );
}
