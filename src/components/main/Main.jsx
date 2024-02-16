import Welcome from "../welcome/Welcome";
import Cards from "../cards/AllTheBooks";
import { Container } from "react-bootstrap";

const Main = () => {
  const url = "https://epibooks.onrender.com/";

  const getPost = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      if (!response.ok) {
        const message = "Error with Status Code: " + response.status;
        throw new Error(message);
      }
      let products = await response.json();
      return products;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Welcome />
      <Cards />
    </Container>
  );
};
export default Main;
