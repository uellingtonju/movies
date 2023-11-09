import { Link } from "react-router-dom";
import Favorite from "./favorite.png";
import unFavorite from "./unfavorite.png";
import "./card.css";

function Card({ id }) {
  return (
    <section className="card">
      <Link to={`/watch/${id}`}>
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt="capa"
          className="capa"
        />
      </Link>
      <figure className="icone">
        <img src={Favorite} alt="capa" />
      </figure>
    </section>
  );
}

export default Card;
