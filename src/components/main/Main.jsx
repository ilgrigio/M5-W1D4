import Welcome from "../welcome/Welcome";
import Cards from "../cards/AllTheBooks";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const Main = () => {
  const [products, setProducts] = useState([]);
  const url = "https://epibooks.onrender.com/";

  useEffect(() => {
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
        setProducts(products);
      } catch (err) {
        console.error(err);
      }
    };
    getPost();
  }, []);

  return (
    <Container>
      <Welcome />
      <Cards bookData={products} />
    </Container>
  );
};
export default Main;
