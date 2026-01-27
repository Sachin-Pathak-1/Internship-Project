import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Activity } from "./pages/Activity";
import { Appointments } from "./pages/Appointments";
import { History } from "./pages/History";
import { Route,Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashborad";

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}

export default App
