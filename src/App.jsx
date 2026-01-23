import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import MyActivity from "./pages/MyActivity";
import History from "./pages/History";
import ViewProfile from "./pages/ViewProfile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activity" element={<MyActivity />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<ViewProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
