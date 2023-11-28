import { useContext } from "react";
import TaskContext from "../providers/task/context";

const useTask = () => useContext(TaskContext);

export default useTask;
