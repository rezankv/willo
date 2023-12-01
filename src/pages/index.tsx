import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import TaskRow from "./components/TaskRow";
import useLogic from "./useLogic";
import useTask from "../hooks/useTask";
// import Navbar from "./components/Navbar";

const RootLayout = () => {
  const { setIsAddTaskDialogOpen, setSelectedTask } = useLogic();

  const { tasks } = useTask();
  return (
    <div>
      <div>navbar</div>
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full">
          <Searchbar />

          {tasks.map((item) => (
            <TaskRow
              onClick={() => {
                setSelectedTask(item);
                setIsAddTaskDialogOpen(true);
              }}
              text={item.getTitle()}
            />
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
