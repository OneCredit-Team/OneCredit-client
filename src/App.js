import "./shared/global.style.scss";
import AddPlace from "./pages/AddPlace";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GraphPage from "./pages/Percent";
import Background from "./components/Background";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Background>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/graph" element={<GraphPage />} />
          <Route path="/addplace" element={<AddPlace />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default App;
