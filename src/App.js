import { Route, Routes } from "react-router-dom";
import "./App.css";
import GettingStarted from "./pages/GettingStarted";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/getting-started" element={<GettingStarted />}></Route>
      </Routes>
    </div>
  );
}

export default App;
