import { tv } from "tailwind-variants";

import { Card, CardContent } from "../../../../../../components/ui/card";
import { Separator } from "../../../../../../components/ui/separator";

import type { ICourses } from "../../../../../../static/CoursesData";

const generalInfoStyles = tv({
  slots: {
    containerMain: "w-full mb-2",
    containerContent: "flex flex-col gap-y-4 w-full",
    containerText: "flex flex-col gap-y-2 w-full",
    containerList: "flex flex-col gap-y-1",
    containerListItem: "flex flex-row-reverse items-center gap-x-2",
    title: "text-sm font-semibold text-foreground/95",
    text: "text-xs/relaxed font-regular text-foreground/75",
    icon: "w-4 h-4 text-foreground",
  },
  variants: {
    position: {
      start: {
        containerText: "items-start",
      },
      end: {
        containerText: "items-end",
      },
    },
    isList: {
      false: {
        text: "indent-4",
      },
    },
  },
});

const {
  containerMain,
  containerContent,
  containerText,
  containerList,
  containerListItem,
  title,
  text,
  icon,
} = generalInfoStyles();

interface IGeneralInfoProps {
  data: ICourses;
}

export const GeneralInfo = ({ data }: IGeneralInfoProps) => {
  return (
    <Card className={containerMain()}>
      <CardContent className={containerContent()}>
        <div className={containerText({ position: "start" })}>
          <h2 className={title()}>Podemos introduzir brevemente ...</h2>

          <p className={text({ isList: false })}>{data.introduction}</p>
        </div>

        <Separator />

        <div className={containerText({ position: "start" })}>
          <h2 className={title()}>Serviços</h2>

          <p className={text({ isList: false })}>{data.service}</p>
        </div>

        <div className={containerText({ position: "end" })}>
          <h2 className={title()}>Vantagens</h2>

          <ul className={containerList()}>
            {data.advantages.map((advantage) => (
              <li key={advantage.id} className={containerListItem()}>
                <advantage.Icon className={icon()} strokeWidth={2} />
                <p className={text({ isList: true })}>{advantage.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={containerText({ position: "start" })}>
          <h2 className={title()}>Novos desafios</h2>

          <ul className={containerList()}>
            {data.challenges.map((challenge) => (
              <li key={challenge.id}>
                <p className={text({ isList: true })}>- {challenge.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
