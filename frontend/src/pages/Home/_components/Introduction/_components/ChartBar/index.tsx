import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Rectangle,
  XAxis,
} from "recharts";
import { tv } from "tailwind-variants";

import { Card, CardContent } from "../../../../../../components/ui/card";
import {
  ChartContainer,
  type ChartConfig,
} from "../../../../../../components/ui/chart";

const titleStyle = tv({
  base: "text-xs font-semibold text-foreground/95 text-center",
});

interface IChartBarProps {
  title: string;
  type?: "money" | "percentage";
  data: any;
  dataKey: string;
  nameKey: string;
  config: ChartConfig;
}

export const ChartBar = ({
  title,
  type,
  data,
  dataKey,
  nameKey,
  config,
}: IChartBarProps) => {
  const formatValue = (value: number) => {
    if (type === "money") return `R$ ${value.toFixed(2).replace(".", ",")}`;
    if (type === "percentage") return `${value.toFixed(1).replace(".", ",")}%`;
    return value;
  };

  return (
    <Card>
      <CardContent>
        <h2 className={titleStyle()}>{title}</h2>

        <ChartContainer config={config}>
          <BarChart accessibilityLayer data={data} margin={{ top: 20 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={nameKey}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value: string) =>
                String(config[value as keyof typeof config]?.label ?? value)
              }
            />
            <Bar
              dataKey={dataKey}
              strokeWidth={2}
              radius={8}
              activeIndex={0}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                );
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                formatter={(value: number) => formatValue(value)}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
