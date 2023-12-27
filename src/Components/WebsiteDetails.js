import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Reviews from "./Reviews";

function WebsiteDetails() {
  const [website, setWebsite] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/websites/${id}`).then((response) => {
      setWebsite(response.data);
    });
  }, [id, navigate, API]);
  const deleteWebsite = () => {
    axios
      .delete(`${API}/websites/${id}`)
      .then(() => {
        navigate(`/websites`);
      })
      .catch((c) => console.error("catch", c));
  };
  const handleDelete = () => {
    deleteWebsite();
  };
  return (
    <>
      <article>
        <h3>
          {website.is_favorite ? <span>⭐️</span> : null} {website.name}
        </h3>
        <h5>
          <span>
            <a href={website.url}>{website.name}</a>
          </span>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {website.url}
        </h5>
        <h6>{website.category}</h6>
        <p>{website.description}</p>
        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/websites`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/websites/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
      <Reviews />
    </>
  );
}

export default WebsiteDetails;