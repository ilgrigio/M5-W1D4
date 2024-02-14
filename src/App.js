import React from "react";

// import { Container } from "react-bootstrap";
import MyNav from "./components/navbar/MyNav";
import MyFooter from "./components/footer/MyFooter";
import Welcome from "./components/welcome/Welcome";
import Main from "./components/main/Main";

const App = () => {
  return (
    <>
      <MyNav />
      <Main />
      <MyFooter />
    </>
  );
};

export default App;
