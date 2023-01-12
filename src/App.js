import "./shared/global.style.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GraphPage from "./pages/Percent";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GraphPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
