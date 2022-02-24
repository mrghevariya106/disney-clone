import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import componenets
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/home"} element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
