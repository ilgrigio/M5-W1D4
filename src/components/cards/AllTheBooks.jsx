import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import bookData from "../../history.json";
import { Container } from "react-bootstrap";
import SingleBook from "./SingleBook";
import Searchbar from "../searchbar/Searchbar";
import { useState } from "react";

const AllTheBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBooks = bookData.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(bookData);
  return (
    <Container className="mt-3">
      <Searchbar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Row xs={1} md={4} className="g-4">
        {filteredBooks.map((book, idx) => (
          <Col key={idx}>
            <SingleBook
              img={book.img}
              title={book.title}
              category={book.category}
              price={book.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
