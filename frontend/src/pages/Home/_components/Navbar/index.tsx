import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";
import { Moon, Sun } from "lucide-react";

import { Button } from "../../../../components/ui/button";

import LogoCTLight from "@assets/logo_ct_light.png";
import LogoCTDark from "@assets/logo_ct_dark.png";

const navbarStyles = tv({
  slots: {
    containerMain:
      "fixed top-0 left-0 right-0 flex flex-row items-center justify-between p-4 lg:px-8 xl:px-12 z-50",
    logo: "w-12 lg:w-16 h-6 lg:h-8",
    button: "size-8 lg:size-10 cursor-pointer",
  },
});

const { containerMain, logo, button } = navbarStyles();

export const Navbar = () => {
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
      <img
        className={logo()}
        src={darkMode ? LogoCTLight : LogoCTDark}
        alt="Logo CT"
      />

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
