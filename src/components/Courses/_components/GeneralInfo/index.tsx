import { Separator } from "../Separator";

import type { ICourses } from "../../../../static/CoursesData";

interface IGeneralInfoProps {
  data: ICourses;
}

export const GeneralInfo = ({ data }: IGeneralInfoProps) => {
  return (
    <article className="flex flex-col gap-y-6 w-full p-4 bg-secondary/5 rounded-lg">
      <div className="flex flex-col items-start gap-y-2 w-full">
        <h2 className="text-sm font-semibold text-secondary/95">
          Podemos introduzir brevemente ...
        </h2>

        <p className="text-sm font-regular text-secondary/75 indent-4">
          {data.introduction}
        </p>
      </div>

      <Separator />

      <div className="flex flex-col items-start gap-y-2 w-full">
        <h2 className="text-sm font-semibold text-secondary">Serviços</h2>

        <p className="text-sm font-regular text-secondary/75 indent-4">
          {data.service}
        </p>
      </div>

      <div className="flex flex-col items-end gap-y-2 w-full">
        <h2 className="text-sm font-semibold text-secondary/95">Vantagens</h2>

        <ul className="flex flex-col gap-y-2">
          {data.advantages.map((advantage) => (
            <li
              key={advantage.id}
              className="flex flex-row-reverse items-center gap-x-2"
            >
              <advantage.Icon
                className="w-4 h-4 text-secondary"
                strokeWidth={2}
              />
              <p className="text-sm font-regular text-secondary/75">
                {advantage.title}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-start gap-y-2 w-full">
        <h2 className="text-sm font-semibold text-secondary/95">
          Novos desafios
        </h2>

        <ul className="flex flex-col gap-y-2 w-full">
          {data.challenges.map((challenge) => (
            <li key={challenge.id}>
              <p className="text-sm font-regular text-secondary/75">
                - {challenge.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
