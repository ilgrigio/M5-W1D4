import React from "react";
import MyNav from "./components/navbar/MyNav";
import MyFooter from "./components/footer/MyFooter";
import AllTheBooks from "./components/cards/AllTheBooks";

const App = () => {
  return (
    <>
      <MyNav />
      <AllTheBooks />
      <MyFooter />
    </>
  );
};

export default App;
