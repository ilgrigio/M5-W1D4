// POST https://striveschool-api.herokuapp.com/api/comments/
import React, { useState } from "react";
import axios from "axios";

const FetchPost = () => {
  const [formData, setFormData] = useState({
    rate: 0,
    comment: "",
  });

  const fetchPost = async () => {
    try {
      await axios.post("https://striveschool-api.herokuapp.com/api/comments/", formData, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQyODM2OWU2YmFmYzAwMTk0Y2U1ZTQiLCJpYXQiOjE3MDgyOTUwMTcsImV4cCI6MTcwOTUwNDYxN30.AJE8fggpY4EfEs0ulunSN_UV7nTgWkgB23dsQdKRYB4",
      },
    });
      console.log("Commento aggiunto con successo!");
    } catch (error) {
      console.error("Errore durante l'aggiunta del commento:", error);
    }
  };

  const onChangeInput = (ev) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      {/* Aggiungi un nuovo commento */}
      <input
        value={formData.rate}
        onChange={onChangeInput}
        name="rate"
        type="number"
        placeholder="rate"
      />
      <input
        value={formData.comment}
        onChange={onChangeInput}
        name="comment"
        type="text"
        placeholder="comment"
      />
      <button onClick={fetchPost}>Aggiungi Commento</button>
    </div>
  );
};

export default FetchPost;
