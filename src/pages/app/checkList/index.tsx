// ** components
import { Head, ScrollArea } from "@components";

// ** hooks
import { useStorage } from "@hooks";

// ** models
import { TaskModel } from "@models";

// ** locals
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import useLogic from "./useLogic";
import EditTaskDialog from "./components/EditTaskDialog";
import Context from "./context";
import TaskRow from "./components/TaskRow";

const ChecklistPage = () => {
  const {
    isSidebarOpen,
    setIsSidebarOpen,
    isEditTaskDialogOpen,
    selectedTask,
    setSelectedTask,
    toggleDialog,
    searchedValue,
    setSearchedValue,
  } = useLogic();

  const { getTasks } = useStorage();

  const renderTaskRows = (tasks: TaskModel[]) =>
    !tasks.length ? (
      <div className="mt-2 text-center text-[15px] font-medium text-text-light">
        No Items Found!
      </div>
    ) : (
      tasks.map((task) => (
        <TaskRow
          key={task.getId()}
          onClick={() => {
            setSelectedTask(task);
            toggleDialog(true);
          }}
          task={task}
        />
      ))
    );

  return (
    <>
      <Head title="Willo | Checklist" />
      <Context.Provider
        value={{
          searchedValue,
          setSearchedValue,
          setIsSidebarOpen,
          isSidebarOpen,
        }}
      >
        <div className="bg-background">
          <div className="flex w-full">
            <Sidebar />
            <div className="relative w-full ">
              <Searchbar />
              <ScrollArea className="h-[30rem] w-full rounded-md border ">
                {renderTaskRows(getTasks(searchedValue))}
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

export default ChecklistPage;
