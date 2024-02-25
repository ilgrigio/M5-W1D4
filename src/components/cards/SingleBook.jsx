import { useState } from "react";
import Card from "react-bootstrap/Card";
import styles from "./SingleBook.module.css";
import CommentArea from "../modal/CommentArea";
// asin, img, title, category, price
const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <Card
      onClick={handleClick}
      className={selected ? styles.cardStyle : styles.card}
    >
      <Card.Text>{book.asin}</Card.Text>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle>{book.category}</Card.Subtitle>
        <Card.Text>€ {book.price.toFixed(2)}</Card.Text>
        {/* <Card.Text>{asin}</Card.Text>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{category}</Card.Subtitle>
        <Card.Text>€ {price.toFixed(2)}</Card.Text> */}
        <CommentArea asin={book.asin} />
      </Card.Body>
    </Card>
  );
};
export default SingleBook;
