import axios from "axios";
import { useState, useEffect } from "react";
import Website from "./Website";

const API = process.env.REACT_APP_API_URL;

function Websites() {
  const [websites, setWebsites] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/websites`)
      .then((response) => setWebsites(response.data))
      .catch((c) => console.error("catch", c));
  }, []);
  return (
    <div className="Websites">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this website</th>
            </tr>
          </thead>
          <tbody>
            {websites.map((website) => {
              return <website key={website.id} website={website} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Websites;