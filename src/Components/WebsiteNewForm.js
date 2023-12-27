import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//const API = process.env.REACT_APP_API_URL;

function WebsiteNewForm() {
  let navigate = useNavigate();

  const addWebsite = (newWebsite) => {
    axios
      .post(`https://pern-backend-413r.onrender.com/websites`, newWebsite)
      .then(() => {
        navigate(`/websites`);
      })
      .catch((c) => console.error("catch", c));
  };

  const [website, setWebsite] = useState({
    name: "",
    url: "",
    category: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setWebsite({ ...website, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setWebsite({ ...website, is_favorite: !website.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addWebsite(website);
  };
  return (
    <div className="New">
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
    </div>
  );
}

// export default withRouter(websiteNewForm);
export default WebsiteNewForm;