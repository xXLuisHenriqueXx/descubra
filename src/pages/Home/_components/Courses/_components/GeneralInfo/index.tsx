import { tv } from "tailwind-variants";

import { Card, CardContent } from "../../../../../../components/ui/card";
import { Separator } from "../../../../../../components/ui/separator";

import type { ICourses } from "../../../../../../static/CoursesData";

const generalInfoStyles = tv({
  slots: {
    containerMain: "w-full mb-2 lg:mb-4",
    containerContent: "flex flex-col gap-y-4 lg:gap-y-8 w-full",
    containerText: "flex flex-col md:items-center gap-y-2 w-full",
    containerList: "flex flex-col gap-y-1",
    containerListItem: "flex flex-row-reverse md:flex-row items-center gap-x-2",
    title: "text-sm lg:text-lg font-semibold text-foreground/95",
    text: "text-xs/relaxed lg:text-sm font-regular text-foreground/75",
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
    maxWidth: {
      true: {
        text: "md:max-w-[60%]",
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

          <p className={text({ isList: false, maxWidth: true })}>
            {data.introduction}
          </p>
        </div>

        <Separator />

        <div className="flex flex-col md:justify-between md:flex-row gap-y-4 md:gap-x-4 lg:gap-x-8 w-full">
          <div className={containerText({ position: "start" })}>
            <h2 className={title()}>Serviços</h2>

            <p className={text({ isList: false })}>{data.service}</p>
          </div>

          <Separator orientation="vertical" className="hidden md:flex" />

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

          <Separator orientation="vertical" className="hidden md:flex" />

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
        </div>
      </CardContent>
    </Card>
  );
};
