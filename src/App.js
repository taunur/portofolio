import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./main/pages/HomePage";
import DetailPage from "./main/pages/DetailPage";
import NotFoundpage from "./main/pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="*" element={<NotFoundpage />} />
      </Routes>
    </Router>
  );
}

export default App;
