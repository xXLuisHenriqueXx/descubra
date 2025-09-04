import { useState } from "react";
import { Menu, Sun } from "lucide-react";

import { Modal } from "./_components/Modal";

import LogoCT from "@assets/logo_ct.png";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 flex flex-row items-center justify-between p-4 z-50">
      <div className="flex flex-row items-center gap-x-4">
        <button
          className="p-1 bg-secondary/5 rounded-lg outline-none cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          <Menu className="w-6 h-6 text-secondary" />
        </button>
        <img className="w-12 h-6" src={LogoCT} alt="Logo CT" />
      </div>

      <Modal showMenu={showMenu} />

      <button className="p-1 bg-secondary/5 rounded-full outline-none cursor-pointer">
        <Sun className="w-6 h-6 text-secondary" />
      </button>
    </header>
  );
};
