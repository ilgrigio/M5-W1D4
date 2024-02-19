// GET https://striveschool-api.herokuapp.com/api/books/:asin/comments/
import React, { useEffect } from "react";
import axios from "axios";

const FetchGet = ({ comments, setComments }) => {
  // const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          "https://striveschool-api.herokuapp.com/api/books/:asin/comments/",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQyODM2OWU2YmFmYzAwMTk0Y2U1ZTQiLCJpYXQiOjE3MDgyOTUwMTcsImV4cCI6MTcwOTUwNDYxN30.AJE8fggpY4EfEs0ulunSN_UV7nTgWkgB23dsQdKRYB4",
            },
          }
        );
        setComments(response.data);
      } catch (error) {
        console.error("Errore durante il recupero dei commenti:", error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div>
      {/* Visualizza i commenti esistenti */}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchGet;
