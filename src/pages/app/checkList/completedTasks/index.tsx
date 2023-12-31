// ** hooks
import { useStorage } from "@hooks";

// ** locals
import TasksList from "../components/TasksList";

const CompletedTasksPage = () => {
  const { getCompletedTasks } = useStorage();


  return <TasksList tasks={getCompletedTasks()} />;
};

export default CompletedTasksPage;
