import { Container, Row, Col } from "react-bootstrap";
import ModalForm from "./ModalForm";
import FetchGet from "../fetch/FetchGet";
import { useState } from "react";

function ModalBody() {
  const [showComment, setShowComment] = useState([]);
  return (
    <>
      <Container className="m-0">
        <Row>
          <Col className="w-25 flex-column">
            <FetchGet comments={showComment} setShowComments={setShowComment} />
          </Col>
          <Col className="w-75 gap-3">
            <ModalForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ModalBody;
