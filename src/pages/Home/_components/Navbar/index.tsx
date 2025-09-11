import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { tv } from "tailwind-variants";

import { Modal } from "./_components/Modal";
import { Button } from "../../../../components/ui/button";

import LogoCTLight from "@assets/logo_ct_light.png";
import LogoCTDark from "@assets/logo_ct_dark.png";

const navbarStyles = tv({
  slots: {
    containerMain:
      "fixed top-0 left-0 right-0 flex flex-row items-center justify-between p-4 z-50",
    containerLogo: "flex flex-row items-center gap-x-4",
    logo: "w-12 h-6",
    button: "size-8 cursor-pointer",
  },
});

const { containerMain, containerLogo, logo, button } = navbarStyles();

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className={containerMain()}>
      <div className={containerLogo()}>
        <Button
          variant={"outline"}
          size="icon"
          className={button()}
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <X /> : <Menu />}
        </Button>
        <img
          className={logo()}
          src={darkMode ? LogoCTLight : LogoCTDark}
          alt="Logo CT"
        />
      </div>

      <Modal showMenu={showMenu} />

      <Button
        variant={"outline"}
        size="icon"
        className={button()}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <Sun /> : <Moon />}
      </Button>
    </header>
  );
};
