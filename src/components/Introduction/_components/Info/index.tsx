import { Card, CardContent } from "../../../ui/card";

interface IInfoProps {
  name: string;
  subname?: string;
  text: string;
  topics?: string[];
}

export const Info = ({ name, subname, text, topics }: IInfoProps) => {
  return (
    <article className="flex flex-col gap-y-2">
      <div className="flex flex-row items-end gap-x-1">
        <h1 className="text-sm font-medium text-foreground">
          Sobre <strong className="text-lg text-primary">{name}</strong>
        </h1>
        <p className="text-xs font-semibold text-primary/75">{subname}</p>
      </div>

      <p className="text-xs/relaxed font-regular text-foreground/75 indent-4">
        {text}
      </p>

      {topics && topics.length > 0 && (
        <Card>
          <CardContent className="flex flex-col gap-y-2">
            {topics.map((info) => (
              <p
                key={info}
                className="text-xs/relaxed font-regular text-foreground"
              >
                - {info};
              </p>
            ))}
          </CardContent>
        </Card>
      )}
    </article>
  );
};
