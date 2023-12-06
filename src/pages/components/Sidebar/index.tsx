import { BackDrop, Button } from "../../../components";
import Check from "../../../assets/icons/check.svg?react";
import Mail from "../../../assets/icons/mail.svg?react";
import Plus from "../../../assets/icons/plus.svg?react";
import Star from "../../../assets/icons/star.svg?react";
import Trash from "../../../assets/icons/trash.svg?react";
import CreateTaskDialog from "./components/CreateTaskDialog";
import useLogic from "./useLogic";
import { cn } from "../../../utils";
import { useContext } from "react";
import LayoutContext from "../../context";
import { zIndex } from "../../../constants";

const Sidebar = () => {
  const { isCreateTaskDialogOpen, toggleDialog } = useLogic();
  const { isSidebarOpen, setIsSidebarOpen } = useContext(LayoutContext);
  return (
    <>
      <BackDrop
        onClick={() => setIsSidebarOpen((prevState) => !prevState)}
        isShow={isSidebarOpen}
        className="md:hidden"
      >
        <aside
          className={cn(
            `z-sidebar fixed flex -translate-x-full transform transition-all md:relative `,
            isSidebarOpen ? "translate-x-0" : "",
          )}
        >
          <div
            className={cn(
              "  w-60 overflow-y-auto border-l border-r bg-background-paper px-5 py-8 sm:w-64 ",
            )}
          >
            <div className="relative ">
              <Button size={"xl"} onClick={() => toggleDialog(true)}>
                Add Task
              </Button>
            </div>

            <nav className="-mx-3 mt-4">
              <div className="space-y-3">
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300  hover:bg-gray-100     hover:text-gray-700"
                  href="#"
                >
                  <Mail />

                  <span className="mx-2 text-sm font-medium">My Tasks</span>
                </a>

                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300   hover:bg-gray-100     hover:text-gray-700"
                  href="#"
                >
                  <Star />

                  <span className="mx-2 text-sm font-medium">Importants</span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300   hover:bg-gray-100     hover:text-gray-700"
                  href="#"
                >
                  <Check />

                  <span className="mx-2 text-sm font-medium">Completed</span>
                </a>

                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300   hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  <Trash />

                  <span className="mx-2 text-sm font-medium">Deleted</span>
                </a>
              </div>

              <div className="mt-10 space-y-3">
                <div className="flex items-center justify-between px-2">
                  <label className="px-3 text-xs uppercase text-gray-500  ">
                    TAGS
                  </label>
                  <Plus />
                </div>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex transform items-center gap-3 rounded-lg px-3 py-1 text-sm text-gray-600 transition-colors duration-300  "
                  >
                    <span className="h-2 w-2 rounded-full bg-purple"></span>
                    <span className="font-medium">Team</span>
                  </a>
                  <a
                    href="#"
                    className="flex transform items-center gap-3 rounded-lg px-3 py-1 text-sm text-gray-600 transition-colors duration-300  "
                  >
                    <span className="h-2 w-2 rounded-full bg-error"></span>
                    <span className="font-medium">High</span>
                  </a>
                  <a
                    href="#"
                    className="flex transform items-center gap-3 rounded-lg px-3 py-1 text-sm text-gray-600 transition-colors duration-300  "
                  >
                    <span className="h-2 w-2 rounded-full bg-green"></span>
                    <span className="font-medium">Low</span>
                  </a>
                  <a
                    href="#"
                    className="flex transform items-center gap-3 rounded-lg px-3 py-1 text-sm text-gray-600 transition-colors duration-300  "
                  >
                    <span className="h-2 w-2 rounded-full bg-orange"></span>
                    <span className="font-medium">Medium</span>
                  </a>
                  <a
                    href="#"
                    className="flex transform items-center gap-3 rounded-lg px-3 py-1 text-sm text-gray-600 transition-colors duration-300  "
                  >
                    <span className="h-2 w-2 rounded-full bg-cyan"></span>
                    <span className="font-medium">Update</span>
                  </a>
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
