// ** models
import { TaskModel } from "@models";

// ** locals
import TaskRow from "./components/TaskRow";

interface Props {
  tasks: TaskModel[];
}
const TasksList = ({ tasks }: Props) => {
  const renderTaskRows = (tasks: TaskModel[]) =>
    !tasks.length ? (
      <div className="mt-2 text-center text-[15px] font-medium text-text-light">
        No Items Found!
      </div>
    ) : (
      tasks.map((task) => <TaskRow key={task.getId()} task={task} />)
    );

  return (
    <>
      <div className="  w-full  flex-grow overflow-auto  bg-background-paper">
        {renderTaskRows(tasks)}
      </div>
    </>
  );
};

export default TasksList;
