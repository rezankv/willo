// ** components
import { Head } from "@components";

// ** locals
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import { Provider } from "./context";
import TasksList from "./components/TasksList";

const ChecklistPage = () => {
  return (
    <>
      <Head title="Willo | Checklist" />
      <Provider>
        <div className="bg-background">
          <div className="flex w-full">
            <Sidebar />
            <div className="relative w-full ">
              <Searchbar />
              <TasksList />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
};

export default ChecklistPage;
