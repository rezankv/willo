// ** hooks
import { useStorage } from "@hooks";

// ** locals
import TasksList from "../components/TasksList";

const ImportantTasks = () => {
  const { getImportantTasks } = useStorage();
  return <TasksList tasks={getImportantTasks()} />;
};

export default ImportantTasks;
