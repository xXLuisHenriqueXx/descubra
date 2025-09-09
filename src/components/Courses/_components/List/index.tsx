import { ListHeader } from "./ListHeader";
import { ListItem } from "./ListItem";

import type { ICourses } from "../../../../static/CoursesData";
import { Card, CardContent } from "../../../ui/card";

interface IListProps {
  data: ICourses;
  visible: Record<string, boolean>;
  toggleVisibility: (id: string) => void;
}

export const List = ({ data, visible, toggleVisibility }: IListProps) => {
  const colors: Record<string, string> = {
    process: "bg-process/10",
    ecosystem: "bg-ecosystem/10",
    energy: "bg-energy/10",
    project: "bg-project/10",
    tech: "bg-tech/10",
  };

  return (
    <div className="flex flex-col gap-y-2 w-full">
      {data.courses.map((course) => {
        const isOpen = visible[course.id];

        return (
          <Card key={course.id} className="relative w-full">
            <CardContent className="flex flex-col gap-y-4">
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
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
