import { ReactNode, Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  COMPLETED_ROUTE,
  DELETED_ROUTE,
  IMPORTANT_ROUTE,
  MY_TASK_ROUTE,
} from "../../constants";

const MyTaskPage = lazy(() => import("../../pages/myTask"));
const DeletedPage = lazy(() => import("../../pages/deleted"));
const ImportantPage = lazy(() => import("../../pages/important"));
const CompletedPage = lazy(() => import("../../pages/completed"));

const router = createBrowserRouter([
  {
    path: MY_TASK_ROUTE,
    element: <MyTaskPage />,
  },
  {
    path: COMPLETED_ROUTE,
    element: <CompletedPage />,
  },
  {
    path: DELETED_ROUTE,
    element: <DeletedPage />,
  },
  {
    path: IMPORTANT_ROUTE,
    element: <ImportantPage />,
  },

]);

interface Props {
  children: ReactNode;
}
const RouterProvider1 = ({ children }: Props) => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <RouterProvider router={router} />
      </Suspense>

      {children}
    </>
  );
};

export default RouterProvider1;
