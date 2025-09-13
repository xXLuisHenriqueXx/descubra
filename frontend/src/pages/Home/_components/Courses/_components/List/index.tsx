import { tv } from "tailwind-variants";

import { Card, CardContent } from "../../../../../../components/ui/card";
import { ListHeader } from "./ListHeader";
import { ListItem } from "./ListItem";

import type { ICourses } from "../../../../../../static/CoursesData";

const listStyles = tv({
  slots: {
    containerMain: "flex flex-col gap-y-2 lg:gap-y-4 w-full",
    containerCard: "relative w-full lg:py-4",
    containerContent: "flex flex-col gap-y-4 w-full",
  },
});

const { containerMain, containerCard, containerContent } = listStyles();

interface IListProps {
  data: ICourses;
  visible: Record<string, boolean>;
  toggleVisibility: (id: string) => void;
}

export const List = ({ data, visible, toggleVisibility }: IListProps) => {
  return (
    <div className={containerMain()}>
      {data.courses.map((course) => {
        const isOpen = visible[course.id];

        return (
          <Card key={course.id} className={containerCard()}>
            <CardContent className={containerContent()}>
              <ListHeader
                id={data.id}
                course={course}
                isOpen={isOpen}
                toggleVisibility={toggleVisibility}
              />

              <ListItem id={data.id} course={course} isOpen={isOpen} />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
