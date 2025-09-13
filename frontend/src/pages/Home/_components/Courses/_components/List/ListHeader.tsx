import { tv } from "tailwind-variants";
import { ChevronDown, ChevronUp, GraduationCap } from "lucide-react";

import type { ICourse } from "../../../../../../static/CoursesData";

const listHeaderStyles = tv({
  slots: {
    containerMain: "flex flex-row items-center gap-x-4",
    title: "text-xs lg:text-base font-medium",
    icon: "w-6 h-6",
  },
  variants: {
    color: {
      process: {
        title: "text-process",
        icon: "text-process",
      },
      ecosystem: {
        title: "text-ecosystem",
        icon: "text-ecosystem",
      },
      energy: {
        title: "text-energy",
        icon: "text-energy",
      },
      project: {
        title: "text-project",
        icon: "text-project",
      },
      tech: {
        title: "text-tech",
        icon: "text-tech",
      },
    },
    absolute: {
      true: {
        icon: "absolute right-4",
      },
    },
  },
});

const { containerMain, title, icon } = listHeaderStyles();

interface IListHeaderProps {
  id: "process" | "ecosystem" | "energy" | "project" | "tech";
  course: ICourse;
  isOpen: boolean;
  toggleVisibility: (id: string) => void;
}

export const ListHeader = ({
  id,
  course,
  isOpen,
  toggleVisibility,
}: IListHeaderProps) => {
  return (
    <div
      className={containerMain()}
      onClick={() => toggleVisibility(course.id)}
    >
      <GraduationCap className={icon({ color: id })} strokeWidth={2} />

      <h2 className={title({ color: id })}>{course.title}</h2>

      {isOpen ? (
        <ChevronUp
          className={icon({ color: id, absolute: true })}
          strokeWidth={2}
        />
      ) : (
        <ChevronDown
          className={icon({ color: id, absolute: true })}
          strokeWidth={2}
        />
      )}
    </div>
  );
};
