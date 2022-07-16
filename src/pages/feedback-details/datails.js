import "./comments.scss";
import { useParams } from "react-router-dom";
import Comments from "./details-items/details-items";
function Details(prop) {
    const param = useParams()
    const current = Data.find(el => +el.id === +param.id)
  console.log(current);
  return (
    <section className="comments-section">
      <b className="comments-section__num-comment">4 Comments</b>
      <ul className="comments-section__cards">
        {/* comments-section__card--reply */}
        <Comments />
      </ul>
    </section>
  );
}

export default Details;
