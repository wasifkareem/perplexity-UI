import "./App.css"; // Make sure to create this CSS file

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Discover from "./pages/Discover";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/page/article" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
