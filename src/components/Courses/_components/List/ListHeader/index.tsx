import { ChevronDown, ChevronUp, GraduationCap } from "lucide-react";

import type { ICourse, ICourses } from "../../../../../static/CoursesData";

interface IListHeaderProps {
  data: ICourses;
  course: ICourse;
  isOpen: boolean;
  toggleVisibility: (id: string) => void;
}

export const ListHeader = ({
  data,
  course,
  isOpen,
  toggleVisibility,
}: IListHeaderProps) => {
  return (
    <div
      className="flex flex-row items-center gap-x-4"
      onClick={() => toggleVisibility(course.id)}
    >
      <GraduationCap className={`w-6 h-6 text-${data.color}`} strokeWidth={2} />

      <h2 className={`text-sm font-medium text-${data.color} pr-6`}>
        {course.title}
      </h2>

      {isOpen ? (
        <ChevronUp
          className={` absolute right-4 w-6 h-6 text-${data.color}`}
          strokeWidth={2}
        />
      ) : (
        <ChevronDown
          className={` absolute right-4 w-6 h-6 text-${data.color}`}
          strokeWidth={2}
        />
      )}
    </div>
  );
};
