import {
  Cpu,
  Factory,
  Settings,
  Sprout,
  Zap,
  type LucideIcon,
} from "lucide-react";

interface ILink {
  id: "process" | "ecosystem" | "energy" | "project" | "tech";
  icon: LucideIcon;
  label: string;
}

export const links: ILink[] = [
  { id: "process", icon: Settings, label: "Processos e Produtividade" },
  { id: "ecosystem", icon: Sprout, label: "Ambientes e Ecossistemas" },
  { id: "energy", icon: Zap, label: "Energia e Comunicação" },
  { id: "project", icon: Factory, label: "Projeto e Fabricação" },
  { id: "tech", icon: Cpu, label: "Tecnologia e Desenvolvimento" },
];
