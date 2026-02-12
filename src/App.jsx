import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { Propose } from "./components/Propose";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/propose" element={<Propose />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
