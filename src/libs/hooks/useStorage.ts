import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

// ** models
import { TaskModel } from "@models";

// ** validations
import { CreateTaskSchema, UpdateTaskSchema } from "@validations";

/* -------------------------------------------------------------------------- */
/*                              Task Slice                                    */
/* -------------------------------------------------------------------------- */

interface TaskSlice {
  tasks: TaskModel[];
  getTasks: (taskTitle?: string, page?: number, limit?: number) => TaskModel[];
  createTask: (data: CreateTaskSchema) => void;
  updateTask: (taskId: string, data: UpdateTaskSchema) => void;
  getTaskById: (taskId: string) => TaskModel;
  deleteTask: (taskId: string) => void;
  sortTasks: (type: "A-Z" | "Z-A") => void;
  toggleTaskCompletion: (taskId: string, isCompleted: boolean) => void;
  toggleTaskImportant: (taskId: string, isImportant: boolean) => void;
  getCompletedTasks: () => TaskModel[];
  getDeletedTasks: () => TaskModel[];
  getImportantTasks: () => TaskModel[];
  getAvailableTasks: () => TaskModel[];
}

const createTaskSlice: StateCreator<TaskSlice, [], [], TaskSlice> = (
  set,
  get,
) => ({
  tasks: [] as TaskModel[],

  getTasks: (taskTitle = "", page = 1, limit = 10) => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const tasks = get()
      .tasks.filter((task) => task.props?.title?.includes(taskTitle))
      .slice(startIndex, endIndex);
    const taskModels = tasks.map((task) => new TaskModel(task.props));
    return taskModels;
  },

  createTask: (data: CreateTaskSchema) =>
    set((state) => ({ tasks: [new TaskModel(data), ...state.tasks] })),

  updateTask: (taskId: string, data: UpdateTaskSchema) => {
    const selectedTask = get().getTaskById(taskId);
    const updatedTask = new TaskModel({ ...selectedTask.props, ...data });
    set((s) => ({
      tasks: s
        .getTasks()
        .map((task) => (task.getId() === taskId ? updatedTask : task)),
    }));
  },

  getTaskById: (taskId: string) =>
    get()
      .getTasks()
      .find((task) => task.getId() === taskId) || new TaskModel(),

  deleteTask: (taskId: string) => {
    const selectedTask = get().getTaskById(taskId);
    const updatedTask = new TaskModel({
      ...selectedTask.props,
      isDeleted: true,
    });

    set((s) => ({
      tasks: s
        .getTasks()
        .map((task) => (task.getId() === taskId ? updatedTask : task)),
    }));
  },

  sortTasks: (type) => {
    const tasks = get().tasks.sort(
      (a, b) => a.props?.title?.localeCompare(b.props?.title || "") || 0,
    );
    type === "A-Z" ? set({ tasks }) : set({ tasks: tasks.reverse() });
  },

  toggleTaskCompletion: (taskId, isCompleted) => {
    get().updateTask(taskId, { isCompleted });
  },

  toggleTaskImportant: (taskId, isImportant) =>
    get().updateTask(taskId, { isImportant }),

  getAvailableTasks: () =>
    get()
      .getTasks()
      .filter((task) => !task.getIsDeleted()),

  getCompletedTasks: () =>
    get()
      .getTasks()
      .filter((task) => task.getIsCompleted()),

  getDeletedTasks: () =>
    get()
      .getTasks()
      .filter((task) => task.getIsDeleted()),

  getImportantTasks: () =>
    get()
      .getTasks()
      .filter((task) => task.getIsImportant()),
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
