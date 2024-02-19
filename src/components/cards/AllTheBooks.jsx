import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import bookData from "../../history.json";
import { Container } from "react-bootstrap";
import SingleBook from "./Single.Book";

const AllTheBooks = ({ bookData }) => {
  return (
    <Container className="mt-3">
      <Row xs={1} md={4} className="g-4">
        {bookData.map((book, idx) => {
          console.log(book); // Aggiungi questa riga
          return (
            <Col key={idx}>
              <SingleBook
                asin={book.asin}
                img={book.img}
                title={book.title}
                category={book.category}
                price={book.price}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
