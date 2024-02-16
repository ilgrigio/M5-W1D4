import { useState } from "react";
import Card from "react-bootstrap/Card";
import styles from "./SingleBook.module.css";

const SingleBook = ({ asin, img, title, category, price }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <Card
      onClick={handleClick}
      className={selected ? styles.cardStyle : styles.card}
    >
      <Card.Text>{asin}</Card.Text>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{category}</Card.Subtitle>
        <Card.Text>€ {price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default SingleBook;
