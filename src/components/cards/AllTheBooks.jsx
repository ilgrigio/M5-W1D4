import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import bookData from "../../history.json";
import { Container } from 'react-bootstrap';

const AllTheBooks = () => {
    return(
      <Container className="mt-3">
        <Row xs={1} md={4} className="g-4">
      {bookData.map((book, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Subtitle>{book.category}</Card.Subtitle>
              <Card.Text>€ {book.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
    )
}

export default AllTheBooks