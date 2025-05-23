
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BeyondRescue } from "./pages/BeyondRescue";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={
          <div>
            <p className="text-2xl text-black">Links:</p>
            <Link to="/portfolio/beyond-rescue" className="underline text-blue-400">Beyond Rescue</Link>
          </div>
        }></Route>
        <Route path="/portfolio/beyond-rescue" element={<BeyondRescue />} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
