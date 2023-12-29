import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useLocation } from "react-router-dom";

// ** components
import { BackDrop, Button } from "@components";

// ** assets
import {
  CheckIcon,
  MailIcon,
  PlusIcon,
  StarIcon,
  TrashIcon,
} from "@assets/icons";

// ** utils
import { cn } from "@utils";

// ** constants
import {
  APP_CHECKLIST_ALL_TASKS_ROUTE,
  APP_CHECKLIST_COMPLETED_TASKS_ROUTE,
  APP_CHECKLIST_DELETED_TASKS_ROUTE,
  APP_CHECKLIST_IMPORTANT_TASKS_ROUTE,
  APP_CHECKLIST_TAGS_HIGH_ROUTE,
  APP_CHECKLIST_TAGS_LOW_ROUTE,
  APP_CHECKLIST_TAGS_MEDIUM_ROUTE,
} from "@constants";

// ** locals
import CreateTaskDialog from "./components/CreateTaskDialog";
import useLogic from "./useLogic";
import LayoutContext from "../../context";

const Sidebar = () => {
  const { pathname } = useLocation();

  const { isCreateTaskDialogOpen, toggleDialog } = useLogic();
  const { isSidebarOpen, setIsSidebarOpen } = useContext(LayoutContext);

  const sidebarItems = {
    primaries: [
      {
        label: "My Tasks",
        path: APP_CHECKLIST_ALL_TASKS_ROUTE,
        icon: <MailIcon className='w-[18px] h-[18px]'/>,
      },
      {
        label: "Important Tasks",
        path: APP_CHECKLIST_IMPORTANT_TASKS_ROUTE,
        icon: <StarIcon className='w-[18px] h-[18px]'/>,
      },
      {
        label: "Completed",
        path: APP_CHECKLIST_COMPLETED_TASKS_ROUTE,
        icon: <CheckIcon className='w-[18px] h-[18px]'/>,
      },
      {
        label: "Deleted",
        path: APP_CHECKLIST_DELETED_TASKS_ROUTE,
        icon: <TrashIcon className='w-[18px] h-[18px]'/>,
      },
    ],
    tags: [
      {
        label: "High",
        path: APP_CHECKLIST_TAGS_HIGH_ROUTE,
        icon: <span className="h-2 w-2 rounded-full bg-error"></span>,
      },
      {
        label: "Medium",
        path: APP_CHECKLIST_TAGS_MEDIUM_ROUTE,
        icon: <span className="h-2 w-2 rounded-full bg-orange"></span>,
      },
      {
        label: "Low",
        path: APP_CHECKLIST_TAGS_LOW_ROUTE,
        icon: <span className="h-2 w-2 rounded-full bg-green"></span>,
      },
    ],
  };
  return (
    <>
      <BackDrop
        onClick={() => setIsSidebarOpen((prevState) => !prevState)}
        isShow={isSidebarOpen}
        className="md:hidden"
      >
        <aside
          className={cn(
            `fixed z-sidebar flex -translate-x-full transform transition-all md:relative `,
            isSidebarOpen ? "translate-x-0" : "",
          )}
        >
          <div
            className={cn(
              "   overflow-y-auto border-l border-r bg-background-paper px-5 py-8  ",
            )}
          >
            <div className="relative ">
              <Button size={"xl"} onClick={() => toggleDialog(true)}>
                Add Task
              </Button>
            </div>

            <nav className="-mx-3 mt-4">
              <div className="space-y-6">
                {sidebarItems.primaries.map(({ path, icon, label }) => (
                  <Link
                    key={uuidv4()}
                    className={cn(
                      "flex transform items-center  px-1 text-gray-600 transition-colors duration-300   hover:text-primary",
                      pathname === path ? "text-primary  border-primary border-l-2	" : "",
                    )}
                    to={path}
                  >
                    {icon}
                    <span className="mx-2 text-sm font-medium">{label}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-10 space-y-3">
                <div className="flex items-center justify-between px-2">
                  <label className="px-3 text-xs uppercase text-gray-500  ">
                    TAGS
                  </label>
                  <PlusIcon />
                </div>
                <div className="space-y-3">
                  {sidebarItems.tags.map(({ icon, label, path }) => (
                    <Link
                      key={uuidv4()}
                      to={path}
                      className={cn(
                        "flex transform items-center gap-3 rounded-lg px-3 py-1 text-sm text-gray-600 transition-colors duration-300  ",
                        pathname === path ? "text-primary" : "",
                      )}
                    >
                      {icon}
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </aside>
      </BackDrop>

      <CreateTaskDialog
        isOpen={isCreateTaskDialogOpen}
        onClose={() => toggleDialog(false)}
      />
    </>
  );
};

export default Sidebar;
