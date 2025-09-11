import { tv } from "tailwind-variants";

import { Info } from "./_components/Info";
import { ChartPie } from "./_components/ChartPie";
import { Map } from "./_components/Map";
import { ChartBar } from "./_components/ChartBar";

import type { ChartConfig } from "../../../../components/ui/chart";
import { ExtraInfoData } from "../../../../static/ExtraInfoData";

const containerMain = tv({
  base: "flex flex-col gap-y-8 w-full px-4",
});

export const Introduction = () => {
  const chartDataJobsIncrease = [
    { name: "Tecnologia", value: 10.8, fill: "var(--primary)" },
    {
      name: "Outras Carreiras",
      value: 2.3,
      fill: "var(--foreground)",
    },
  ];

  const chartConfigJobsIncrease: ChartConfig = {
    value: {
      label: "value",
    },
    Tecnologia: {
      label: "Tecnologia",
      color: "var(--chart-1)",
    },
    "Outras Carreiras": {
      label: "Outras carreiras",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  const chartDataJobs6Months = [
    { name: "Tecnologia", value: 53.5, fill: "var(--primary)" },
    {
      name: "Outras Carreiras",
      value: 46.5,
      fill: "var(--foreground)",
    },
  ];

  const chartConfigJobs6Months: ChartConfig = {
    value: {
      label: "value",
    },
    Tecnologia: {
      label: "Tecnologia",
      color: "var(--chart-1)",
    },
    "Outras Carreiras": {
      label: "Outras carreiras",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  const chartDataSalary = [
    { name: "Tecnologia", value: 101650, fill: "var(--primary)" },
    {
      name: "Outras Carreiras",
      value: 46680,
      fill: "var(--foreground)",
    },
  ];

  const chartConfigSalary: ChartConfig = {
    value: {
      label: "value",
    },
    Tecnologia: {
      label: "Tecnologia",
      color: "var(--chart-1)",
    },
    "Outras Carreiras": {
      label: "Outras carreiras",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  const chartDataInternationalCareer = [
    { name: "Tecnologia", value: 61.9, fill: "var(--primary)" },
    {
      name: "Outras Carreiras",
      value: 38.1,
      fill: "var(--foreground)",
    },
  ];

  const chartConfigInternationalCareer: ChartConfig = {
    value: {
      label: "value",
    },
    Tecnologia: {
      label: "Tecnologia",
      color: "var(--chart-1)",
    },
    "Outras Carreiras": {
      label: "Outras carreiras",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  const chartDataPromotion3Years = [
    { name: "Tecnologia", value: 65, fill: "var(--primary)" },
    {
      name: "Outras Carreiras",
      value: 35,
      fill: "var(--foreground)",
    },
  ];

  const chartConfigPromotion3Years: ChartConfig = {
    value: {
      label: "value",
    },
    Tecnologia: {
      label: "Tecnologia",
      color: "var(--chart-1)",
    },
    "Outras Carreiras": {
      label: "Outras carreiras",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  return (
    <section className={containerMain()}>
      <Info
        name={ExtraInfoData.city.name}
        subname={ExtraInfoData.city.state}
        text={ExtraInfoData.city.paragraph}
      />

      <Map />

      <Info
        name={ExtraInfoData.college.name}
        text={ExtraInfoData.college.paragraph}
        topics={ExtraInfoData.college.extraInfos}
      />

      <Info
        name={ExtraInfoData.ct.name}
        subname={ExtraInfoData.ct.prefix}
        text={ExtraInfoData.ct.paragraph}
      />

      <ChartBar
        title="Aumento de vagas em 10 anos"
        type="percentage"
        data={chartDataJobsIncrease}
        dataKey="value"
        nameKey="name"
        config={chartConfigJobsIncrease}
      />

      <ChartPie
        title="Empregabilidade até 6 meses após formar"
        text="53,5%"
        data={chartDataJobs6Months}
        dataKey="value"
        nameKey="name"
        config={chartConfigJobs6Months}
      />

      <ChartBar
        title="Salário Médio Anual (2023)"
        type="money"
        data={chartDataSalary}
        dataKey="value"
        nameKey="name"
        config={chartConfigSalary}
      />

      <ChartPie
        title="Oportunidade de Carreira Internacional"
        text="61,9%"
        data={chartDataInternationalCareer}
        dataKey="value"
        nameKey="name"
        config={chartConfigInternationalCareer}
      />

      <ChartBar
        title="Oportunidade de promoção em até 3 anos"
        type="percentage"
        data={chartDataPromotion3Years}
        dataKey="value"
        nameKey="name"
        config={chartConfigPromotion3Years}
      />
    </section>
  );
};
