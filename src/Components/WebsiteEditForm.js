import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function WebsiteEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [website, setWebsite] = useState({
    name: "",
    url: "",
    category: "",
    is_favorite: false,
  });

  const updateWebsite = (updatedWebsite) => {
    axios
      .put(`${API}/websites/${id}`, updatedWebsite)
      .then(() => {
        navigate(`/websites/${id}`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleTextChange = (event) => {
    setWebsite({ ...website, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setWebsite({ ...website, is_favorite: !website.is_favorite });
  };

  useEffect(() => {
    axios
      .get(`${API}/websites/${id}`)
      .then((response) => setWebsite(response.data))
      .catch(() => navigate(`/not-found`));
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateWebsite(website, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={website.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Website"
          required
        />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={website.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={website.category}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={website.is_favorite}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/websites/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default WebsiteEditForm;