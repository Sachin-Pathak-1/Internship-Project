import { Navbar } from "../components/Navbar";
import { SideBar } from "../components/Sidebar";

export function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="flex gap-6 mt-10">
        <SideBar />
        {children}
      </div>
    </div>
  );
}