import { Route, Routes } from "react-router-dom";
import "./App.css";
import GettingStarted from "./pages/GettingStarted";
import Home from "./pages/Home";
import { Options, Option } from "./pages/options";
import RefreshInterval from "./pages/options/RefreshInterval";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="getting-started" element={<GettingStarted />}></Route>
        <Route path="options" element={<Options />}>
          <Route index element={<Option />} />
          <Route path="refreshInterval" element={<RefreshInterval />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
