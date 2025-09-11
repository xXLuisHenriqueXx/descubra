import { motion, AnimatePresence } from "motion/react";
import { tv } from "tailwind-variants";

import { Separator } from "../../../../../../components/ui/separator";

import type { ICourse } from "../../../../../../static/CoursesData";

const listItemStyles = tv({
  slots: {
    containerMain: "flex flex-col gap-y-4 w-full",
    containerGeneral: "flex flex-row items-center gap-x-2",
    containerGeneralItem:
      "flex flex-1 flex-col items-center justify-center aspect-square h-32 bg-foreground/10 rounded-lg shadow-sm shadow-black/5",
    containerData: "flex flex-col gap-y-2 w-full",
    containerItems: "flex flex-row flex-wrap gap-2",
    title: "text-sm font-semibold text-foreground/95",
    titleSemester: "text-4xl font-bold text-foreground",
    textSemester: "text-sm font-medium text-foreground text-center",
  },
  variants: {
    color: {
      process: {
        containerGeneralItem: "bg-process/10",
      },
      ecosystem: {
        containerGeneralItem: "bg-ecosystem/10",
      },
      energy: {
        containerGeneralItem: "bg-energy/10",
      },
      project: {
        containerGeneralItem: "bg-project/10",
      },
      tech: {
        containerGeneralItem: "bg-tech/10",
      },
    },
  },
});

const {
  containerMain,
  containerGeneral,
  containerGeneralItem,
  containerData,
  containerItems,
  title,
  titleSemester,
  textSemester,
} = listItemStyles();

interface IListItemProps {
  id: "process" | "ecosystem" | "energy" | "project" | "tech";
  course: ICourse;
  isOpen: boolean;
}

export const ListItem = ({ id, course, isOpen }: IListItemProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.1 }}
          className={containerMain()}
        >
          <div className={containerGeneral()}>
            <div
              className={containerGeneralItem({
                color: id,
              })}
            >
              <h3 className={titleSemester()}>{course.duration}</h3>

              <p className={textSemester()}>SEMESTRES</p>
            </div>

            <div
              className={containerGeneralItem({
                color: id,
              })}
            >
              {course.reputation}
            </div>
          </div>

          <Separator />

          <div className={containerData()}>
            <h2 className={title()}>Interesses e Afinidades</h2>

            <div className={containerItems()}>
              {course.affinities.map((affinity) => (
                <div key={affinity.id} className={containerGeneralItem()}>
                  {affinity.children}
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className={containerData()}>
            <h2 className={title()}>Atuações</h2>

            <div className={containerItems()}>
              {course.actions.map((action) => (
                <div
                  key={action.id}
                  className={containerGeneralItem({
                    color: id,
                  })}
                >
                  {action.children}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
