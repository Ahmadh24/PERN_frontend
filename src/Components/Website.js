import { Link } from "react-router-dom";

function Website({ website }) {
  return (
    <tr>
      <td>
        {website.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={website.url} target="_blank" rel="noreferrer">
          {website.name}
        </a>
      </td>
      <td className="Website">
        <Link to={`/websites/${website.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Website;