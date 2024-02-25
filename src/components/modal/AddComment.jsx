import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    elementId: null,
    rate: 1,
    comment: "",
  });

  useEffect(() => {
    setComment(prevComment => ({ ...prevComment, elementId: asin }));
  }, [asin]);

  const sendComment = async e => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          text: comment,
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRhMGQyNmQwMDFmMzAwMTk2YWM5NzkiLCJpYXQiOjE3MDg3ODkwMzAsImV4cCI6MTcwOTk5ODYzMH0.CPuSb74ofvTVMHzBMgmJVarrTAdiPf_5HJfCHwHI2Go",
          },
          body: JSON.stringify(comment),
        }
      );
      if (response.ok) {
        alert("Recensione inviata!");
        setComment({
          comment: "",
          rate: 1,
          elementId: null,
        });
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="d-flex flex-column gap-3">
      <input
        value={comment.elementId}
        type="text"
        name="elementId"
        placeholder="elementId"
      />
      <input
        onChange={e =>
          setComment({
            ...comment,
            comment: e.target.value,
          })
        }
        name={comment.rate}
        type="number"
        min={1}
        max={5}
        placeholder="rate"
      />
      <input
        onChange={e =>
          setComment({
            ...comment,
            comment: e.target.value,
          })
        }
        name={comment.comment}
        type="text"
        placeholder="comment"
      />
      <Button onClick={sendComment}>Add Comment</Button>

      {/* <Button onClick={() => FetchPost(formData)}>Add Comment</Button> */}
    </div>
  );
};
export default AddComment;
