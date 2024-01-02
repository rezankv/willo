import { useContext } from "react";

// ** hooks
import { useStorage } from "@hooks";

// ** locals
// import Context from "../context";
import TasksList from "../components/TasksList";
import Context from "../context";

const AllTasksPage = () => {
  const { getAvailableTasks } = useStorage();
  const { searchedValue } = useContext(Context);

  return <TasksList tasks={getAvailableTasks({ title: searchedValue })} />;
};

export default AllTasksPage;
