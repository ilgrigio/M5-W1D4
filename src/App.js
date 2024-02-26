import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Errorpage from "./pages/Errorpage";
import Loginpage from "./pages/Loginpage";
import ProtectedRoutes from "./middleware/ProtectedRoutes";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Loginpage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
