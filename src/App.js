import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Filter from "./pages/Filter";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/filters" element={<Filter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
