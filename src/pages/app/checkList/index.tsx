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
        <div className="bg-background">
          <div className="flex w-full">
            <Sidebar />
            <div className="relative w-full ">
              <Searchbar />
              <Outlet />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
};

export default ChecklistLayout;
