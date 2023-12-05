import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import TaskRow from "./components/TaskRow";
import useLogic from "./useLogic";
import useTask from "../hooks/useTask";
import EditTaskDialog from "./components/EditTaskDialog";

const RootLayout = () => {
  const { isEditTaskDialogOpen, selectedTask, setSelectedTask, toggleDialog } =
    useLogic();

  const { tasks } = useTask();
  return (
    <>
      <div className="bg-background">
        <div>navbar</div>
        <div className="flex w-full">
          <Sidebar />
          <div className="w-full ">
            <Searchbar />

            {tasks.map((item) => (
              <TaskRow
                key={item.getId()}
                onClick={() => {
                  setSelectedTask(item);
                  toggleDialog(true);
                }}
                task={item}
              />
            ))}
          </div>
        </div>
        <Outlet />
      </div>
      <EditTaskDialog
        isOpen={isEditTaskDialogOpen}
        onClose={() => toggleDialog(false)}
        task={selectedTask}
      />
    </>
  );
};

export default RootLayout;
