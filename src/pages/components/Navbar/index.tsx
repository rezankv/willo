// ** assets
import { LogoIcon, GithubIcon } from "@assets/icons";

// ** constants
import { willo_github_url } from "@constants";

const Navbar = () => {
  return (
    <header className="relative flex justify-between px-10 py-5">
      <div className="flex items-center gap-4">
        <LogoIcon className="h-12 w-12" />
        <span className="text-2xl font-thin text-text">Willo</span>
      </div>
      <a href={willo_github_url} target="_blank">
        <GithubIcon className="cursor-pointer hover:text-primary" />
      </a>
    </header>
  );
};

export default Navbar;
