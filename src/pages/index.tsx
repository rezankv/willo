import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import useLogic from "./useLogic";
import EditTaskDialog from "./components/EditTaskDialog";
import Context from "./context";
import { ScrollArea } from "../components";
import { useStorage } from "../hooks";
import TaskRow from "./components/TaskRow";

const RootLayout = () => {
  const {
    isSidebarOpen,
    setIsSidebarOpen,
    isEditTaskDialogOpen,
    selectedTask,
    setSelectedTask,
    toggleDialog,
  } = useLogic();

  const { getTasks} = useStorage();
  
  return (
    <Context.Provider value={{ setIsSidebarOpen, isSidebarOpen }}>
      <div className="bg-background">
        <div className="flex w-full">
          <Sidebar />
          <div className="relative w-full ">
            <Searchbar />
            <ScrollArea  className="w-full h-[30rem] rounded-md border p-4" >
            {getTasks().map((item) => (
              <TaskRow
                key={item.getId()}
                onClick={() => {
                  setSelectedTask(item);
                  toggleDialog(true);
                }}
                task={item}
              />
            ))}
            </ScrollArea>
          </div>
        </div>
        <Outlet />
      </div>
      <EditTaskDialog
        isOpen={isEditTaskDialogOpen}
        onClose={() => toggleDialog(false)}
        task={selectedTask}
      />
    </Context.Provider>
  );
};

export default RootLayout;
