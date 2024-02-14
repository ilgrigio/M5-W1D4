import Welcome from "../welcome/Welcome";
import Cards from "../cards/AllTheBooks";
import Searchbar from "../searchbar/Searchbar";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <Container>
      <Welcome />
      <Searchbar />
      <Cards />
    </Container>
  );
};
export default Main;
