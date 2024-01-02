import { Outlet } from "react-router-dom";

// ** components
import { Head } from "@components";

// ** locals
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import { Provider } from "./context";

const ChecklistLayout = () => {
  return (
    <>
      <Head title="Willo | Checklist" />
      <Provider>
        <div className="flex max-h-screen min-h-screen  bg-background">
          <Sidebar />
          <div className="relative flex min-h-screen max-h-screen   w-full flex-col">
            <Searchbar />
            <Outlet />
          </div>
        </div>
      </Provider>
    </>
  );
};

export default ChecklistLayout;
