import {
  ActivitySquare,
  Bot,
  CheckCircle2,
  CircleX,
  Coins,
  Database,
  Mountain,
  Ticket,
  type LucideIcon,
} from "lucide-react";
import type { IHealth } from "../../../../../common/interface/Admin.interface";
import { Separator } from "../../../../../components/ui/separator";
import HealthCard from "./HealthCard";
import { useEffect, useState, type ReactNode } from "react";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "../../../../../components/ui/chart";
import { Label, Pie, PieChart, Sector } from "recharts";
import type { PieSectorDataItem } from "recharts/types/polar/Pie";
import { AdminService } from "../../../../../services/adminService";
import Loader from "../Loader";
import { Button } from "../../../../../components/ui/button";

interface CardConfig {
  id: number;
  title: string;
  icon: LucideIcon;
  renderContent: (logs?: IHealth) => ReactNode;
}

const Health = () => {
  const [logs, setLogs] = useState<IHealth>();
  const [chatStatus, setChatStatus] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFetchLogs = async () => {
    setIsLoading(true);

    try {
      await AdminService.health().then((response) => {
        setLogs(response);
      });
      await AdminService.checkStatusChat().then((response) => {
        setChatStatus(response);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeactiveChat = async () => {
    await AdminService.deactiveChat().then(() => {
      handleFetchLogs();
    });
  };

  const handleActiveChat = async () => {
    await AdminService.activeChat().then(() => {
      handleFetchLogs();
    });
  };

  useEffect(() => {
    handleFetchLogs();

    return () => {};
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const sessionsPercentage =
    logs?.sessions_status?.sessions_limit &&
    logs?.sessions_status?.sessions_active /
      logs?.sessions_status?.sessions_limit;

  const chartSessionsData = [
    {
      name: "Usadas",
      value: Number(logs?.sessions_status?.sessions_active ?? 0),
      fill: "var(--primary)",
    },
    {
      name: "Restantes",
      value: Number(
        (logs?.sessions_status?.sessions_limit ?? 0) -
          (logs?.sessions_status?.sessions_active ?? 0)
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
      renderContent: () =>
        logs?.openai_api?.toLowerCase() === "ok" ? (
          <CheckCircle2 size={64} strokeWidth={1} />
        ) : (
          <CircleX size={64} strokeWidth={1} />
        ),
    },
    {
      id: 2,
      title: "Situação do Banco de Dados",
      icon: Database,
      renderContent: () =>
        logs?.database?.toLowerCase() === "ok" ? (
          <CheckCircle2 size={64} strokeWidth={1} />
        ) : (
          <CircleX size={64} strokeWidth={1} />
        ),
    },
    {
      id: 3,
      title: "Situação das Variáveis de ambiente",
      icon: Mountain,
      renderContent: () =>
        logs?.env_vars?.toLowerCase() === "ok" ? (
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
      title: "Situações dos tokens",
      icon: Coins,
      renderContent: () => (
        <span className="flex flex-col gapy-2">
          <p className="text-sm font-bold">
            Modelo: {logs?.used_tokens?.ai_model}
          </p>
          <p className="text-sm font-bold">
            Preço estimado: {logs?.used_tokens?.estimated_price_usd}
          </p>
          <p className="text-sm font-bold">
            Tokens de input restantes: {logs?.used_tokens?.total_input_tokens}
          </p>
          <p className="text-sm font-bold">
            Tokens de output restantes: {logs?.used_tokens?.total_output_tokens}
          </p>
        </span>
      ),
    },
    {
      id: 6,
      title: "Situação Geral",
      icon: ActivitySquare,
      renderContent: () =>
        logs?.status?.toLowerCase() === "ok" ? (
          <CheckCircle2 size={64} strokeWidth={1} />
        ) : (
          <CircleX size={64} strokeWidth={1} />
        ),
    },
    {
      id: 6,
      title: "Chat ativado?",
      icon: ActivitySquare,
      renderContent: () =>
        chatStatus ? (
          <>
            <CheckCircle2 size={64} strokeWidth={1} />

            <Button variant={"destructive"} onClick={handleDeactiveChat}>
              Desativar Chat
            </Button>
          </>
        ) : (
          <>
            <CircleX size={64} strokeWidth={1} />

            <Button variant={"destructive"} onClick={handleActiveChat}>
              Ativar Chat
            </Button>
          </>
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
            {renderContent()}
          </HealthCard>
        ))}
      </article>
    </section>
  );
};

export default Health;
