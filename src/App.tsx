import icon from "./assets/frederox_1024.jpeg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BeyondRescue } from "./pages/BeyondRescue";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BeyondRescue />} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
