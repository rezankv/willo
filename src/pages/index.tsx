import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import TaskRow from "./components/TaskRow";
import Dialog from "../components/UI/Dialog";
import Input from "../components/UI/Input";
import AddTaskDailog from "./components/AddTaskDialog";
import useLogic from "./useLogic";
import { TagEnum } from "../enums";
import { TaskModel } from "../models";
// import Navbar from "./components/Navbar";

const tasks = [
  {
    title: "reza is here",
    date: new Date(),
    tags: [TagEnum.high],
    description: "dlsbaljbhdaslkj",
  },
  {
    title: "reza is here",
    date: new Date(),
    tags: [TagEnum.high],
    description: "dlsbaljbhdaslkj",
  },
  {
    title: "reza is here",
    date: new Date(),
    tags: [TagEnum.high],
    description: "dlsbaljbhdaslkj",
  },
  {
    title: "reza is here",
    date: new Date(),
    tags: [TagEnum.high],
    description: "dlsbaljbhdaslkj",
  },
];
const RootLayout = () => {
  const {
    isAddTaskDialogOpen,
    isEditTaskDialogOpen,
    setIsAddTaskDialogOpen,
    setIsEditTaskDialogOpen,
    selectedTask,
    setSelectedTask,
  } = useLogic();
  return (
    <div>
      <div>navbar</div>
      <div className="flex w-full">
        <Sidebar  />
        <div className="w-full">
          <Searchbar />

          {tasks.map((item) => (
            <TaskRow
              onClick={() => {
                setSelectedTask(new TaskModel(item));
                setIsAddTaskDialogOpen(true);
              }}
              text="Fix Responsiveness for new structure 💻"
            />
          ))}

          <AddTaskDailog
            isOpen={isAddTaskDialogOpen}
            onClose={() => setIsAddTaskDialogOpen(false)}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
