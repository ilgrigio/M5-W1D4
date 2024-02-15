import Card from "react-bootstrap/Card";

const SingleBook = ({ asin, img, title, category, price }) => {
  return (
    <Card>
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
