import type { LucideIcon } from "lucide-react";

import { Button } from "../../../../../components/ui/button";

interface SidebarButtonProps {
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  setUserSelected: (value: boolean) => void;
  title: string;
  icon: LucideIcon;
}

export default function SidebarButton({
  index,
  activeIndex,
  setActiveIndex,
  setUserSelected,
  title,
  icon: Icon,
}: SidebarButtonProps) {
  return (
    <Button
      variant={activeIndex === index ? "secondary" : "ghost"}
      size="lg"
      className="justify-start gap-x-4 cursor-pointer"
      onClick={() => {
        setActiveIndex(index);
        setUserSelected(false);
      }}
    >
      <Icon />

      {title}
    </Button>
  );
}
