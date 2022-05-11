import { BrowserRouter, Routes, Route } from "react-router-dom";

import User from "./pages/User.js";
import Home from "./pages/Home.js";
import * as React from "react";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
