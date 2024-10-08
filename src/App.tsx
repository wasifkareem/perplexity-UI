import "./App.css"; // Make sure to create this CSS file

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Discover from "./pages/Discover";
import Blog from "./pages/Blog";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <span className="hidden md:block z-50 cursor-pointer fixed bottom-5 right-5 text-white font-semibold hover:text-cyan-600 transition-all duration-200 bg-dark rounded-full p-1 px-3 ">
          ?
        </span>
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/page/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
