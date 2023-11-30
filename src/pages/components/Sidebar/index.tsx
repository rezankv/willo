
import { Button } from "../../../components";
import Check from "../../../assets/icons/check.svg?react";
import Mail from "../../../assets/icons/mail.svg?react";
import Plus from "../../../assets/icons/plus.svg?react";
import Star from "../../../assets/icons/star.svg?react";
import Trash from "../../../assets/icons/trash.svg?react";

export default function Sidebar() {
  return (
    <aside className="flex">
      <div className="h-screen px-5 py-8 overflow-y-auto bg-background-paper border-l border-r sm:w-64 w-60 ">
        <div className="relative ">
          <Button size={"xl"}>Add Task</Button>
        </div>

        <nav className="mt-4 -mx-3">
          <div className="space-y-3">
            <a
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100     hover:text-gray-700"
              href="#"
            >
              <Mail />

              <span className="mx-2 text-sm font-medium">My Tasks</span>
            </a>

            <a
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg   hover:bg-gray-100     hover:text-gray-700"
              href="#"
            >
              <Star />

              <span className="mx-2 text-sm font-medium">Importants</span>
            </a>
            <a
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg   hover:bg-gray-100     hover:text-gray-700"
              href="#"
            >
              <Check />

              <span className="mx-2 text-sm font-medium">Completed</span>
            </a>

            <a
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg   hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Trash />

              <span className="mx-2 text-sm font-medium">Deleted</span>
            </a>
          </div>

          <div className="space-y-3 mt-10">
            <div className="flex justify-between px-2 items-center">
              <label className="px-3 text-xs text-gray-500 uppercase  ">
                TAGS
              </label>
              <Plus />
            </div>
            <div className="space-y-3">
              <a
                href="#"
                className="flex gap-3 items-center px-3 py-1 text-sm text-gray-600 transition-colors duration-300 transform rounded-lg  "
              >
                <span className="rounded-full w-2 h-2 bg-purple"></span>
                <span className='font-medium'>Team</span>
              </a>
              <a
                href="#"
                className="flex gap-3 items-center px-3 py-1 text-sm text-gray-600 transition-colors duration-300 transform rounded-lg  "
              >
                <span className="rounded-full w-2 h-2 bg-error"></span>
                <span className='font-medium'>High</span>
              </a>
              <a
                href="#"
                className="flex gap-3 items-center px-3 py-1 text-sm text-gray-600 transition-colors duration-300 transform rounded-lg  "
              >
                <span className="rounded-full w-2 h-2 bg-green"></span>
                <span className='font-medium'>Low</span>
              </a>
              <a
                href="#"
                className="flex gap-3 items-center px-3 py-1 text-sm text-gray-600 transition-colors duration-300 transform rounded-lg  "
              >
                <span className="rounded-full w-2 h-2 bg-orange"></span>
                <span className='font-medium'>Medium</span>
              </a>
              <a
                href="#"
                className="flex gap-3 items-center px-3 py-1 text-sm text-gray-600 transition-colors duration-300 transform rounded-lg  "
              >
                <span className="rounded-full w-2 h-2 bg-cyan"></span>
                <span className='font-medium'>Update</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
