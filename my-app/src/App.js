import { BrowserRouter, Routes, Route } from "react-router-dom";

import User from "./pages/User.js";
import Home from "./pages/Home.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
