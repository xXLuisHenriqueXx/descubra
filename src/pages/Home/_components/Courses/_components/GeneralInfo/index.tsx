import { Card, CardContent } from "../../../../../../components/ui/card";
import { Separator } from "../../../../../../components/ui/separator";

import type { ICourses } from "../../../../../../static/CoursesData";

interface IGeneralInfoProps {
  data: ICourses;
}

export const GeneralInfo = ({ data }: IGeneralInfoProps) => {
  return (
    <Card className="mb-2">
      <CardContent className="flex flex-col gap-y-4 w-full">
        <div className="flex flex-col items-start gap-y-2 w-full">
          <h2 className="text-sm font-semibold text-foreground/95">
            Podemos introduzir brevemente ...
          </h2>

          <p className="text-xs/relaxed font-regular text-foreground/75 indent-4">
            {data.introduction}
          </p>
        </div>

        <Separator />

        <div className="flex flex-col items-start gap-y-2 w-full">
          <h2 className="text-sm font-semibold text-foreground">Serviços</h2>

          <p className="text-xs/relaxed font-regular text-foreground/75 indent-4">
            {data.service}
          </p>
        </div>

        <div className="flex flex-col items-end gap-y-2 w-full">
          <h2 className="text-sm font-semibold text-foreground/95">
            Vantagens
          </h2>

          <ul className="flex flex-col gap-y-1">
            {data.advantages.map((advantage) => (
              <li
                key={advantage.id}
                className="flex flex-row-reverse items-center gap-x-2"
              >
                <advantage.Icon
                  className="w-4 h-4 text-foreground"
                  strokeWidth={2}
                />
                <p className="text-xs/relaxed font-regular text-foreground/75">
                  {advantage.title}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start gap-y-2 w-full">
          <h2 className="text-sm font-semibold text-foreground/95">
            Novos desafios
          </h2>

          <ul className="flex flex-col gap-y-1">
            {data.challenges.map((challenge) => (
              <li key={challenge.id}>
                <p className="text-xs/relaxed font-regular text-foreground/75">
                  - {challenge.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
