import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/icons/logo.svg?react";
import Github from "../../assets/icons/github.svg?react";

const Navbar = () => {
  const [state, setState] = useState(false);
  const menuBtnEl = useRef();

  const navigation = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="relative flex justify-between px-10 py-5">
      <div className="flex gap-4 items-center">
        <Logo className="w-12 h-12"  />
        <span className="font-thin text-2xl text-text">Willo</span>
      </div>
      <Github className="hover:text-primary cursor-pointer"/>
    </header>
  );
};

export default Navbar;
