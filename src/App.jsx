import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar.jsx";
import Footer from "./Component/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Aboutus from "./Pages/Aboutus.jsx";
import Services from "./Pages/Services.jsx";
import Contact from "./Pages/Contact.jsx";
import Login from "./Pages/Login.jsx";
import MyActivity from "./Pages/MyActivity.jsx";
import History from "./Pages/History.jsx";
import ViewProfile from "./Pages/ViewProfile.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import AdminProfile from "./Pages/AdminProfile.jsx";
import AdminAppointments from "./Pages/AdminAppointments.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myactivity" element={<MyActivity />} />
        <Route path="/history" element={<History />} />
        <Route path="/viewprofile" element={<ViewProfile />} />
        
        {/* Admin Dashboard Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/appointments" element={<AdminAppointments />} />
      </Routes>
      <Footer />
    </>
  );
}