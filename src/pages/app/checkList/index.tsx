// ** components
import { Head, ScrollArea } from "@components";

// ** hooks
import { useStorage } from "@hooks";

// ** locals
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import useLogic from "./useLogic";
import EditTaskDialog from "./components/EditTaskDialog";
import Context from "./context";
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

  const { getTasks } = useStorage();

  return (
    <>
      <Head title="Willo | Checklist"/>
      <Context.Provider value={{ setIsSidebarOpen, isSidebarOpen }}>
        <div className="bg-background">
          <div className="flex w-full">
            <Sidebar />
            <div className="relative w-full ">
              <Searchbar />
              <ScrollArea className="h-[30rem] w-full rounded-md border p-4">
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
          {/* <Outlet /> */}
        </div>
        <EditTaskDialog
          isOpen={isEditTaskDialogOpen}
          onClose={() => toggleDialog(false)}
          task={selectedTask}
        />
      </Context.Provider>
    </>
  );
};

export default RootLayout;
