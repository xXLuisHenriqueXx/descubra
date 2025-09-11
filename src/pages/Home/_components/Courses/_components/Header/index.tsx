import type { ICourses } from "../../../../../../static/CoursesData";

interface IHeaderProps {
  data: ICourses;
  gradients: Record<string, string>;
}

export const Header = ({ data, gradients }: IHeaderProps) => {
  return (
    <div
      className={`flex flex-row items-center gap-x-4 w-full p-4 bg-gradient-to-r ${
        gradients[data.color]
      } rounded-xl`}
    >
      <data.icon className="w-6 h-6 text-foreground" strokeWidth={2} />

      <h1 className="text-base font-bold text-foreground">{data.title}</h1>
    </div>
  );
};
