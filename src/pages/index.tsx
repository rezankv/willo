import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Button } from "../components/UI/Button";

const RootLayout = () => {
  return (
    <div>
      <Sidebar />
      <Button >reza</Button>
      <Outlet />
    </div>
  );
};

export default RootLayout;
