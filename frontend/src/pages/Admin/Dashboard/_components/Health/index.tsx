import {
  ActivitySquare,
  Bot,
  CheckCircle2,
  CircleX,
  Database,
  Mountain,
  Ticket,
  type LucideIcon,
} from "lucide-react";
import type { IHealth } from "../../../../../common/interface/Admin.interface";
import { Separator } from "../../../../../components/ui/separator";
import HealthCard from "./HealthCard";
import type { ReactNode } from "react";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "../../../../../components/ui/chart";
import { Label, Pie, PieChart, Sector } from "recharts";
import type { PieSectorDataItem } from "recharts/types/polar/Pie";

interface HealthProps {
  data?: IHealth;
}

interface CardConfig {
  id: number;
  title: string;
  icon: LucideIcon;
  renderContent: (data?: IHealth) => ReactNode;
}

const Health = ({ data }: HealthProps) => {
  const sessionsPercentage =
    data?.sessions_status?.sessions_limit &&
    data?.sessions_status?.sessions_active /
      data?.sessions_status?.sessions_limit;

  const chartSessionsData = [
    {
      name: "Usadas",
      value: Number(data?.sessions_status?.sessions_active ?? 0),
      fill: "var(--primary)",
    },
    {
      name: "Restantes",
      value: Number(
        (data?.sessions_status?.sessions_limit ?? 0) -
          (data?.sessions_status?.sessions_active ?? 0)
      ),
      fill: "var(--foreground)",
    },
  ];

  const chartConfigSessions: ChartConfig = {
    value: {
      label: "value",
    },
    Usadas: {
      label: "Usadas",
      color: "var(--chart-1)",
    },
    Restantes: {
      label: "Restantes",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  const cardsData: CardConfig[] = [
    {
      id: 1,
      title: "Situação do Bot OpenAI",
      icon: Bot,
      renderContent: (data) =>
        data?.openai_api?.toLowerCase() === "ok" ? (
          <CheckCircle2 size={64} strokeWidth={1} />
        ) : (
          <CircleX size={64} strokeWidth={1} />
        ),
    },
    {
      id: 2,
      title: "Situação do Banco de Dados",
      icon: Database,
      renderContent: (data) =>
        data?.database?.toLowerCase() === "ok" ? (
          <CheckCircle2 size={64} strokeWidth={1} />
        ) : (
          <CircleX size={64} strokeWidth={1} />
        ),
    },
    {
      id: 3,
      title: "Situação das Variáveis de ambiente",
      icon: Mountain,
      renderContent: (data) =>
        data?.env_vars?.toLowerCase() === "ok" ? (
          <CheckCircle2 size={64} strokeWidth={1} />
        ) : (
          <CircleX size={64} strokeWidth={1} />
        ),
    },
    {
      id: 4,
      title: "Situação das Sessões",
      icon: Ticket,
      renderContent: () => (
        <ChartContainer
          config={chartConfigSessions}
          className={"mx-auto aspect-square h-32"}
        >
          <PieChart>
            <Pie
              data={chartSessionsData}
              dataKey={"value"}
              nameKey={"name"}
              innerRadius={28}
              strokeWidth={4}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 2} />
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className={"fill-foreground text-lg font-bold"}
                        >
                          {sessionsPercentage &&
                            Math.round(sessionsPercentage * 100)}
                          %
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
            <ChartLegend content={<ChartLegendContent />} />
          </PieChart>
        </ChartContainer>
      ),
    },
    {
      id: 5,
      title: "Situação Geral",
      icon: ActivitySquare,
      renderContent: (data) =>
        data?.status?.toLowerCase() === "ok" ? (
          <CheckCircle2 size={64} strokeWidth={1} />
        ) : (
          <CircleX size={64} strokeWidth={1} />
        ),
    },
  ];

  return (
    <section className="flex flex-col items-start gap-y-4 w-full min-h-screen mt-16">
      <header className="flex flex-col px-4 text-foreground">
        <h1 className="text-base font-semibold">Saúde</h1>
        <p className="text-xs text-foreground/50">
          Informações gerais sobre saúde do sistema ...
        </p>
      </header>

      <Separator />

      <article className="grid grid-cols-4 gap-x-4 -gap-y-64 w-full min-h-full px-4 text-foreground">
        {cardsData.map(({ id, title, icon, renderContent }) => (
          <HealthCard key={id} title={title} icon={icon}>
            {renderContent(data)}
          </HealthCard>
        ))}
      </article>
    </section>
  );
};

export default Health;
