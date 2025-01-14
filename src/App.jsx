import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layout/Header";
import "../src/assets/styles/theme.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
