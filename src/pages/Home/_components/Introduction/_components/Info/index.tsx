import { tv } from "tailwind-variants";

import { Card, CardContent } from "../../../../../../components/ui/card";

const infoStyles = tv({
  slots: {
    containerMain: "flex flex-col gap-y-2",
    containerTitle: "flex flex-row items-end gap-x-1",
    title: "text-sm font-medium text-foreground",
    titleHighlight: "text-lg text-primary",
    subtitle: "text-xs font-semibold text-primary/75",
    textNormal: "text-xs/relaxed font-regular text-foreground/75 indent-4",
    textList: "text-xs/relaxed font-regular text-foreground",
  },
});

const {
  containerMain,
  containerTitle,
  title,
  titleHighlight,
  subtitle,
  textNormal,
  textList,
} = infoStyles();

interface IInfoProps {
  name: string;
  subname?: string;
  text: string;
  topics?: string[];
}

export const Info = ({ name, subname, text, topics }: IInfoProps) => {
  return (
    <article className={containerMain()}>
      <div className={containerTitle()}>
        <h1 className={title()}>
          Sobre <strong className={titleHighlight()}>{name}</strong>
        </h1>
        <p className={subtitle()}>{subname}</p>
      </div>

      <p className={textNormal()}>{text}</p>

      {topics && topics.length > 0 && (
        <Card>
          <CardContent className={containerMain()}>
            {topics.map((info) => (
              <p key={info} className={textList()}>
                - {info};
              </p>
            ))}
          </CardContent>
        </Card>
      )}
    </article>
  );
};
