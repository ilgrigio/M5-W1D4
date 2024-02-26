import React from "react";
import MyNav from "../components/navbar/MyNav";
import MyFooter from "../components/footer/MyFooter";

const Mainlayout = ({ children }) => {
  return (
    <>
      <MyNav />
      {children}
      <MyFooter />
    </>
  );
};

export default Mainlayout;
