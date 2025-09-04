import { ListHeader } from "./ListHeader";
import { ListItem } from "./ListItem";

import type { ICourses } from "../../../../static/CoursesData";

interface IListProps {
  data: ICourses;
  visible: Record<string, boolean>;
  toggleVisibility: (id: string) => void;
}

export const List = ({ data, visible, toggleVisibility }: IListProps) => {
  const colors: Record<string, string> = {
    process: "bg-process/5",
    ecosystem: "bg-ecosystem/5",
    energy: "bg-energy/5",
    project: "bg-project/5",
    tech: "bg-tech/5",
  };

  return (
    <>
      {data.courses.map((course) => {
        const isOpen = visible[course.id];

        return (
          <article
            key={course.id}
            className="relative flex flex-col gap-y-4 w-full p-4 mt-2 bg-secondary/5 rounded-lg"
          >
            <ListHeader
              data={data}
              course={course}
              isOpen={isOpen}
              toggleVisibility={toggleVisibility}
            />

            <ListItem
              color={colors[data.color]}
              course={course}
              isOpen={isOpen}
            />
          </article>
        );
      })}
    </>
  );
};
