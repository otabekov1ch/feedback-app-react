import Feedback from "./feedback/feedback";
import "./feedbacks-list.scss";
import Data from "../../../data";
import { useEffect, useState } from "react";



function FeedbacksList() {
  
const [feedbacks, setFeedbacks] = useState([])

useEffect(() => {
  fetch('http://localhost:3001/productRequests')
.then(res => res.json())
.then(data => setFeedbacks(data))            
},[])
  return (
    <ul className="feedbacks">
      {feedbacks.map((row) => (
          <Feedback
            id={row.id}
            comments={row.comments ? row.comments.length : 0}
            description={row.description}
            title={row.title}
            category={row.category}
            upvotes={row.upvotes}
          />
          
      ))}
    </ul>
  );
}
export default FeedbacksList;
