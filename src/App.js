import React from "react";

// import { Container } from "react-bootstrap";
import MyNav from "./components/navbar/MyNav";
import Cards from "./components/cards/AllTheBooks";
import MyFooter from "./components/footer/MyFooter";
import Welcome from "./components/welcome/Welcome";

const App = () => {
  return (
    <>
      <MyNav />
      <Welcome />
      <Cards />
      <MyFooter />
    </>
  );
};

export default App;
