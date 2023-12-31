// import { useContext } from "react";

// ** hooks
import { useStorage } from "@hooks";

// ** locals
// import Context from "../context";
import TasksList from "../components/TasksList";

const AllTasksPage = () => {
  const { getAvailableTasks } = useStorage();
  // const { searchedValue } = useContext(Context);

  return <TasksList tasks={getAvailableTasks()} />;
};

export default AllTasksPage;
