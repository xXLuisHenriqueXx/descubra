import { Cog, HeartPulse, Logs, UserCog } from "lucide-react";

import SidebarButton from "./SidebarButton";
import { Separator } from "../../../../../components/ui/separator";

interface SidebarProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  setUserSelected: (value: boolean) => void;
}

export default function SidebarComponent({
  activeIndex,
  setActiveIndex,
  setUserSelected,
}: SidebarProps) {
  return (
    <aside className="flex flex-col items-start gap-y-8 min-w-72 min-h-full pt-16 bg-card/25 border-r border-border">
      <div className="flex flex-row items-center gap-x-2 px-4 text-foreground">
        <div className="p-2 bg-primary/50 rounded-lg">
          <Cog size={24} strokeWidth={2} />
        </div>

        <div className="flex flex-col">
          <h1 className="text-base font-semibold">Dashboard Descubra</h1>
          <p className="text-xs text-foreground/50">
            Visualizar informações gerais
          </p>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col w-full gap-y-4 px-4">
        <SidebarButton
          title="Logs Gerais"
          icon={Logs}
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setUserSelected={setUserSelected}
        />
        <SidebarButton
          title="Logs de Usuário"
          icon={UserCog}
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setUserSelected={setUserSelected}
        />
        <SidebarButton
          title="Saúde"
          icon={HeartPulse}
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setUserSelected={setUserSelected}
        />
      </div>
    </aside>
  );
}
