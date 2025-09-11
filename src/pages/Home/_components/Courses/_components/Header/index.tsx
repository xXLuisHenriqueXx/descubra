import { tv } from "tailwind-variants";

import type { ICourses } from "../../../../../../static/CoursesData";

const headerStyles = tv({
  slots: {
    containerMain:
      "flex flex-row items-center gap-x-4 w-full p-4 bg-gradient-to-r rounded-xl",
    text: "text-base font-bold text-foreground",
    icon: "w-6 h-6 text-foreground",
  },
  variants: {
    gradient: {
      process: {
        containerMain: "from-process/20 to-process/80",
      },
      ecosystem: {
        containerMain: "from-ecosystem/20 to-ecosystem/80",
      },
      energy: {
        containerMain: "from-energy/20 to-energy/80",
      },
      project: {
        containerMain: "from-project/20 to-project/80",
      },
      tech: {
        containerMain: "from-tech/20 to-tech/80",
      },
    },
  },
});

const { containerMain, text, icon } = headerStyles();

interface IHeaderProps {
  data: ICourses;
}

export const Header = ({ data }: IHeaderProps) => {
  return (
    <div className={containerMain({ gradient: data.id })}>
      <data.icon className={icon()} strokeWidth={2} />

      <h1 className={text()}>{data.title}</h1>
    </div>
  );
};
