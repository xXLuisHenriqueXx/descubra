import { motion, AnimatePresence } from "motion/react";
import { tv } from "tailwind-variants";

import { Separator } from "../../../../../../components/ui/separator";

import type { ICourse } from "../../../../../../static/CoursesData";
import { Button } from "../../../../../../components/ui/button";

const listItemStyles = tv({
  slots: {
    containerMain: "flex flex-col gap-y-4 lg:gap-y-8 w-full",
    containerGeneral: "flex flex-row items-center gap-x-2 lg:gap-x-4",
    containerGeneralItem:
      "flex flex-col items-center justify-center w-full min-h-32 bg-foreground/10 rounded-lg shadow-sm shadow-black/5",
    containerData: "flex flex-col gap-y-2 w-full",
    containerItems: "grid grid-cols-2 md:grid-cols-5 gap-2 lg:gap-4",
    title: "text-sm lg:text-base font-semibold text-foreground/95",
    titleSemester: "text-4xl font-bold text-foreground",
    textSemester:
      "text-sm lg:text-base font-medium text-foreground text-center",
    buttonQuiz: "w-full py-6",
  },
  variants: {
    color: {
      process: {
        containerGeneralItem: "bg-process/10",
        buttonQuiz: "bg-process/50 hover:bg-process/75",
      },
      ecosystem: {
        containerGeneralItem: "bg-ecosystem/10",
        buttonQuiz: "bg-ecosystem/50 hover:bg-ecosystem/75",
      },
      energy: {
        containerGeneralItem: "bg-energy/10",
        buttonQuiz: "bg-energy/50 hover:bg-energy/75",
      },
      project: {
        containerGeneralItem: "bg-project/10",
        buttonQuiz: "bg-project/50 hover:bg-project/75",
      },
      tech: {
        containerGeneralItem: "bg-tech/10",
        buttonQuiz: "bg-tech/50 hover:bg-tech/75",
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
  buttonQuiz,
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

          {course.quiz && (
            <>
              <Separator />

              <a href={course.quiz} target="_blank" rel="noopener noreferrer">
                <Button variant="default" className={buttonQuiz({ color: id })}>
                  Quiz do curso
                </Button>
              </a>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
