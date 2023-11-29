import RouterProvider from "../router";
import TaskProvider from "./task";

const Providers = () => {
  return (
    <>
      <TaskProvider>
        <RouterProvider />
      </TaskProvider>
    </>
  );
};

export default Providers;
