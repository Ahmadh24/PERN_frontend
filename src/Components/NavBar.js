import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/websites">Websites</Link>
      </h1>
      <button>
        <Link to="/websites/new">New Website</Link>
      </button>
    </nav>
  );
}