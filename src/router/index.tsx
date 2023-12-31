import { Suspense, lazy } from "react";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

// ** constants
import {
  // APP_BOARD_ROUTE,
  // APP_CALENDAR_ROUTE,
  APP_CHECKLIST_ALL_TASKS_ROUTE,
  APP_CHECKLIST_COMPLETED_TASKS_ROUTE,
  APP_CHECKLIST_DELETED_TASKS_ROUTE,
  APP_CHECKLIST_IMPORTANT_TASKS_ROUTE,
  APP_CHECKLIST_ROUTE,
  // APP_CHECKLIST_TAGS_HIGH_ROUTE,
  // APP_CHECKLIST_TAGS_LOW_ROUTE,
  // APP_CHECKLIST_TAGS_MEDIUM_ROUTE,
  // APP_CHECKLIST_TAGS_ROUTE,
  APP_ROUTE,
  LANDING_ROUTE,
} from "@constants";

// ** components
import { LoadingPage } from "@components";

const NotfoundPage = lazy(() => import("@pages/404"));
const LandingPage = lazy(() => import("@pages/."));
const AppLayout = lazy(() => import("@pages/app"));

// checkList
const CheckListLayout = lazy(() => import("@pages/app/checkList"));
const CheckListAllTasks = lazy(() => import("@pages/app/checkList/allTasks"));
const CheckListCompletedTasks = lazy(
  () => import("@pages/app/checkList/completedTasks"),
);
const CheckListDeletedTasks = lazy(
  () => import("@pages/app/checkList/deletedTasks"),
);
const CheckListImportantTasks = lazy(
  () => import("@pages/app/checkList/importantTasks"),
);

// const BoardPage = lazy(() => import("@pages/app/board"));
// const CalendarPage = lazy(() => import("@pages/app/calendar"));

const router = createBrowserRouter([
  {
    path: LANDING_ROUTE,
    element: <LandingPage />,
  },
  {
    path: APP_ROUTE,
    element: <AppLayout />,
    children: [
      {
        path: APP_CHECKLIST_ROUTE,
        element: <CheckListLayout />,
        children: [
          {
            path: APP_CHECKLIST_ALL_TASKS_ROUTE,
            element: <CheckListAllTasks />,
          },
          {
            path: APP_CHECKLIST_COMPLETED_TASKS_ROUTE,
            element: <CheckListCompletedTasks />,
          },
          {
            path: APP_CHECKLIST_DELETED_TASKS_ROUTE,
            element: <CheckListDeletedTasks />,
          },
          {
            path: APP_CHECKLIST_IMPORTANT_TASKS_ROUTE,
            element: <CheckListImportantTasks />,
          },
          {
            path: APP_CHECKLIST_ROUTE,
            element: <Navigate to={APP_CHECKLIST_ALL_TASKS_ROUTE} />,
          },
          // {
          //   path: APP_BOARD_ROUTE,
          //   element: <BoardPage />,
          // },
          // {
          //   path: APP_CALENDAR_ROUTE,
          //   element: <CalendarPage />,
          // },
          // ...[APP_ROUTE, APP_CHECKLIST_ROUTE].map((path) => ({
          //   path,
          //   element: <Navigate to={APP_CHECKLIST_ALL_TASKS_ROUTE} />,
          // })),
        ],
      },
      {
        path: APP_ROUTE,
        element: <Navigate to={APP_CHECKLIST_ROUTE} />,
      },
    ],
  },

  {
    path: "*",
    element: <NotfoundPage />,
  },
]);

const Router = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
