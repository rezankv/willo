import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

// ** models
import { TaskModel } from "@models";

// ** validations
import { CreateTaskSchema, UpdateTaskSchema } from "@validations";

/* -------------------------------------------------------------------------- */
/*                              Slices                                      */
/* -------------------------------------------------------------------------- */

interface TaskSlice {
  tasks: TaskModel[];
  getTasks: (page?: number, limit?: number) => TaskModel[];
  createTask: (data: CreateTaskSchema) => void;
  updateTask: (taskId: string, data: UpdateTaskSchema) => void;
  getTaskById: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

// ** addItem: (newItem) => set((state) => ({ items: [...state.items, newItem] })),

const createTaskSlice: StateCreator<TaskSlice, [], [], TaskSlice> = (
  set,
  get,
) => ({
  // ! if you need the 'tasks' list in components use 'getTasks' function
  tasks: [] as TaskModel[],

  getTasks: (page = 1, limit = 10) => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const tasks = get().tasks.slice(startIndex, endIndex);
    const taskModels = tasks.map((task) => new TaskModel(task.props));
    return taskModels;
  },

  createTask: (data: CreateTaskSchema) =>
    set((state) => ({ tasks: [...state.tasks, new TaskModel(data)] })),

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateTask: (taskId: string, { id, ...rest }: UpdateTaskSchema) =>
    set((s) => ({
      tasks: s.tasks.map((task) =>
        task.props?.id === taskId
          ? new TaskModel({ ...task, ...rest, id: taskId })
          : task,
      ),
    })),

  getTaskById: (taskId: string) =>
    get().tasks.find((task) => task.getId() === taskId) || new TaskModel(),

  deleteTask: (taskId: string) =>
    set(({ tasks }) => ({
      tasks: tasks.filter((task) => task.props?.id !== taskId),
    })),
});

/* -------------------------------------------------------------------------- */
/*                              Storage                                      */
/* -------------------------------------------------------------------------- */

export const useStorage = create<TaskSlice>()(
  persist(
    (...a) => ({
      ...createTaskSlice(...a),
    }),
    { name: "storage", version: 1.0 },
  ),
);
