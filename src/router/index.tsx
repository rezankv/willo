import { Suspense, lazy } from "react";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

// ** constants
import {
  APP_BOARD_ROUTE,
  APP_CALENDAR_ROUTE,
  APP_CHECKLIST_ROUTE,
  APP_ROUTE,
  LANDING_ROUTE,
} from "@constants";

// ** components
import { LoadingPage } from "@components";

const NotfoundPage = lazy(() => import("@pages/404"));
const LandingPage = lazy(() => import("@pages/."));
const AppLayout = lazy(() => import("@pages/app"));
const CheckListPage = lazy(() => import("@pages/app/checkList"));
const BoardPage = lazy(() => import("@pages/app/board"));
const CalendarPage = lazy(() => import("@pages/app/calendar"));

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
        element: <CheckListPage />,
      },
      {
        path: APP_BOARD_ROUTE,
        element: <BoardPage />,
      },
      {
        path: APP_CALENDAR_ROUTE,
        element: <CalendarPage />,
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
