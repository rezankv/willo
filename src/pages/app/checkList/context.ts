import { createContext } from "react";

export default createContext<{
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
}>({ setIsSidebarOpen: () => undefined, isSidebarOpen: false });
