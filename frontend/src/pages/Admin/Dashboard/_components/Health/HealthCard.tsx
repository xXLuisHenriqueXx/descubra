import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../../components/ui/card";
import { Separator } from "../../../../../components/ui/separator";

const HealthCard = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
}) => {
  return (
    <Card className="flex flex-col h-64 gap-y-2">
      <CardHeader>
        <CardTitle className="flex flex-row items-center gap-x-4">
          <Icon /> {title}
        </CardTitle>
      </CardHeader>

      <Separator />

      <CardContent className="flex flex-col flex-1 gap-y-4 items-center justify-center text-center font-bold bg-highlight/30 rounded-lg">
        {children}
      </CardContent>
    </Card>
  );
};

export default HealthCard;
