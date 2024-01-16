import Leaderboard from "./leaderboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/create";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Leaderboard />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
