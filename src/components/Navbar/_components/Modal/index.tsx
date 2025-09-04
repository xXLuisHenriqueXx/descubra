import { motion, AnimatePresence } from "motion/react";
import { Cpu, Factory, Settings, Sprout, Zap } from "lucide-react";

interface IModalProps {
  showMenu: boolean;
}

export const Modal = ({ showMenu }: IModalProps) => {
  return (
    <AnimatePresence>
      {showMenu && (
        <motion.nav
          className="fixed top-15 left-4 flex flex-col items-start justify-center gap-y-4 py-6 px-4 bg-secondary rounded-lg"
          initial={{ opacity: 0, translateY: -16 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: -16 }}
          transition={{ duration: 0.1 }}
        >
          <a href="#process">
            <li className="flex flex-row items-center gap-x-4 w-full px-4 py-2">
              <Settings className="w-6 h-6 text-process" strokeWidth={2} />

              <p className="text-sm font-semibold text-process">
                Processos e Produtividade
              </p>
            </li>
          </a>

          <div className="w-full h-0.5 bg-background/10" />
          <a href="#ecosystem">
            <li className="flex flex-row items-center gap-x-4 px-4 py-2">
              <Sprout className="w-6 h-6 text-ecosystem" strokeWidth={2} />

              <p className="text-sm font-semibold text-ecosystem">
                Ambientes e Ecossistemas
              </p>
            </li>
          </a>

          <div className="w-full h-0.5 bg-background/10" />
          <a href="#energy">
            <li className="flex flex-row items-center gap-x-4 px-4 py-2">
              <Zap className="w-6 h-6 text-energy" strokeWidth={2} />

              <p className="text-sm font-semibold text-energy">
                Energia e Comunicação
              </p>
            </li>
          </a>

          <div className="w-full h-0.5 bg-background/10" />
          <a href="#project">
            <li className="flex flex-row items-center gap-x-4 px-4 py-2">
              <Factory className="w-6 h-6 text-project" strokeWidth={2} />

              <p className="text-sm font-semibold text-project">
                Projeto e Fabricação
              </p>
            </li>
          </a>

          <div className="w-full h-0.5 bg-background/10" />
          <a href="#tech">
            <li className="flex flex-row items-center gap-x-2 px-4 py-2">
              <Cpu className="w-6 h-6 text-tech" strokeWidth={2} />

              <p className="text-sm font-semibold text-tech">
                Tecnologia da Informação
              </p>
            </li>
          </a>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
