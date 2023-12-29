import { useContext } from "react";

// ** components
import { ScrollArea } from "@components";

// ** hooks
import { useStorage } from "@hooks";

// ** models
import { TaskModel } from "@models";

// ** locals
import TaskRow from "./components/TaskRow";
import Context from "../../context";

const TasksList = () => {
  const { getTasks } = useStorage();
  const { searchedValue } = useContext(Context);
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
      <ScrollArea className="h-[30rem] w-full  border-none  bg-background-paper">
        {renderTaskRows(getTasks(searchedValue))}
      </ScrollArea>
    </>
  );
};

export default TasksList;
