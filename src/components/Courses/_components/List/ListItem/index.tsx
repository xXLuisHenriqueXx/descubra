import { motion, AnimatePresence } from "motion/react";

import type { ICourse } from "../../../../../static/CoursesData";
import { Separator } from "../../../../ui/separator";

interface IListItemProps {
  color: string;
  course: ICourse;
  isOpen: boolean;
}

export const ListItem = ({ color, course, isOpen }: IListItemProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.1 }}
          className="flex flex-col gap-y-4 w-full"
        >
          <div className="flex flex-row items-center gap-x-2">
            <div
              className={`flex flex-1 flex-col items-center justify-center h-32 ${color} rounded-lg shadow-sm shadow-black/5`}
            >
              <h3 className="text-4xl font-bold text-foreground">
                {course.duration}
              </h3>

              <p className="text-sm font-medium text-foreground text-center">
                SEMESTRES
              </p>
            </div>

            <div
              className={`flex flex-1 items-center justify-center h-32 ${color} rounded-lg shadow-sm shadow-black/5`}
            >
              {course.reputation}
            </div>
          </div>

          <Separator />

          <div className="flex flex-col gap-y-2 w-full">
            <h2 className="text-sm font-semibold text-foreground/95">
              Interesses e Afinidades
            </h2>

            <div className="flex flex-row flex-wrap gap-2">
              {course.affinities.map((affinity) => (
                <div
                  key={affinity.id}
                  className="flex flex-1 flex-row items-center justify-center p-4 bg-foreground/10 rounded-lg shadow-sm shadow-black/5"
                >
                  {affinity.children}
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="flex flex-col gap-y-2 w-full">
            <h2 className="text-sm font-semibold text-foreground/95">
              Atuações
            </h2>

            <div className="flex flex-row flex-wrap gap-2">
              {course.actions.map((action) => (
                <div
                  key={action.id}
                  className={`flex flex-1 flex-row items-center justify-center p-4 ${color} rounded-lg shadow-sm shadow-black/5`}
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
