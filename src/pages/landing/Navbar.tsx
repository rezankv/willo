import Logo from "../../assets/icons/logo.svg?react";
import Github from "../../assets/icons/github.svg?react";

const Navbar = () => {
  return (
    <header className="relative flex justify-between px-10 py-5">
      <div className="flex items-center gap-4">
        <Logo className="h-12 w-12" />
        <span className="text-2xl font-thin text-text">Willo</span>
      </div>
      <Github className="cursor-pointer hover:text-primary" />
    </header>
  );
};

export default Navbar;
