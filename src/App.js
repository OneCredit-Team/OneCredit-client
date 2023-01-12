import "./shared/global.style.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Background from "./components/Background";
function App() {
  return (
    <Background>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default App;
