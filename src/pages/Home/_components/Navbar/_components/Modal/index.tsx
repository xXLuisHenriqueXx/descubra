import { motion, AnimatePresence } from "motion/react";
import { tv } from "tailwind-variants";

import { Separator } from "../../../../../../components/ui/separator";

import { links } from "../../../../../../static/NavbarLinksData";

const modalStyles = tv({
  slots: {
    containerMain:
      "fixed top-15 left-4 flex flex-col items-start justify-center gap-y-4 py-6 px-4 bg-foreground rounded-lg z-50",
    containerButton: "flex flex-row items-center gap-x-4 w-full px-4 py-2",
    icon: "w-6 h-6",
    text: "text-sm font-semibold",
  },
  variants: {
    color: {
      process: {
        icon: "text-process",
        text: "text-process",
      },
      ecosystem: {
        icon: "text-ecosystem",
        text: "text-ecosystem",
      },
      energy: {
        icon: "text-energy",
        text: "text-energy",
      },
      project: {
        icon: "text-project",
        text: "text-project",
      },
      tech: {
        icon: "text-tech",
        text: "text-tech",
      },
    },
  },
});

const { containerMain, containerButton, icon, text } = modalStyles();

interface IModalProps {
  showMenu: boolean;
}

export const Modal = ({ showMenu }: IModalProps) => {
  return (
    <AnimatePresence>
      {showMenu && (
        <motion.nav
          className={containerMain()}
          initial={{ opacity: 0, translateY: -16 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: -16 }}
          transition={{ duration: 0.1 }}
        >
          {links.map((link, index) => (
            <>
              <a href={`#${link.id}`} key={link.id}>
                <li className={containerButton()}>
                  <link.icon
                    className={icon({ color: link.id })}
                    strokeWidth={2}
                  />

                  <p className={text({ color: link.id })}>{link.label}</p>
                </li>
              </a>

              {index !== links.length - 1 && (
                <Separator className="bg-background/10" />
              )}
            </>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
