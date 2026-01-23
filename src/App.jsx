import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Activity } from "./pages/Activity";
import { History } from "./pages/History";
import { Route,Routes } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}

export default App
