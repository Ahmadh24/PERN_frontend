import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/websites">websites</Link>
      </h1>
      <button>
        <Link to="/websites/new">New website</Link>
      </button>
    </nav>
  );
}