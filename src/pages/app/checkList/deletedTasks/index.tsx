// ** hooks
import { useStorage } from "@hooks";

// ** locals
import TasksList from "../components/TasksList";

const DeletedTasksPage = () => {
  const { getDeletedTasks } = useStorage();
  return <TasksList tasks={getDeletedTasks()} />;
};

export default DeletedTasksPage;
