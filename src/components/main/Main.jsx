import Welcome from "../welcome/Welcome";
import Cards from "../cards/AllTheBooks";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <Container>
      <Welcome />
      <Cards />
    </Container>
  );
};
export default Main;
