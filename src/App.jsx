import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Internship from "./pages/Internship";
import Custom from "./pages/Custom";
import MernRoadmap from "./pages/Courses/Mern";
import Courses from "./pages/Courses";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/custom" element={<Custom />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/mern" element={<MernRoadmap />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
