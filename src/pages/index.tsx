import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
