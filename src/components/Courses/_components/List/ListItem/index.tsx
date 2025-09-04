import { motion, AnimatePresence } from "motion/react";

import { Separator } from "../../Separator";

import type { ICourse } from "../../../../../static/CoursesData";

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
          <Separator />

          <p className="text-sm font-normal text-secondary indent-4">
            {course.description}
          </p>

          <Separator />

          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div
              className={`flex flex-col items-center justify-center gap-y-2 p-4 ${color} rounded-lg shadow-sm shadow-black/5`}
            >
              <h3 className="text-sm font-bold text-secondary">Duração</h3>
              <p className="text-sm font-medium text-secondary/75 text-center">
                {course.duration}
              </p>
            </div>

            <div
              className={`flex flex-col items-center justify-center gap-y-2 p-4 ${color} rounded-lg shadow-sm shadow-black/5`}
            >
              <h3 className="text-sm font-bold text-secondary">DCG</h3>
              <p className="text-sm font-medium text-secondary/75 text-center">
                {course.dcg}
              </p>
            </div>

            <div
              className={`flex flex-col items-center justify-center gap-y-2 p-4 ${color} rounded-lg shadow-sm shadow-black/5`}
            >
              <h3 className="text-sm font-bold text-secondary">ACG</h3>
              <p className="text-sm font-medium text-secondary/75 text-center">
                {course.acg}
              </p>
            </div>

            <div
              className={`flex flex-col items-center justify-center gap-y-2 p-4 ${color} rounded-lg shadow-sm shadow-black/5`}
            >
              <h3 className="text-sm font-bold text-secondary">Extensão</h3>
              <p className="text-sm font-medium text-secondary/75 text-center">
                {course.extension}
              </p>
            </div>
          </div>

          <Separator />

          <div className="flex flex-col gap-y-2 w-full">
            <h2 className="text-sm font-semibold text-secondary/95">
              Interesses e Afinidades
            </h2>

            <div className="flex flex-row flex-wrap gap-2">
              {course.affinities.map((affinity) => (
                <div
                  key={affinity.id}
                  className="flex flex-row items-center gap-x-2 py-2 px-4 bg-secondary/5 shadow-sm shadow-black/5 rounded-lg"
                >
                  <affinity.Icon
                    className="w-4 h-4 text-secondary"
                    strokeWidth={2}
                  />
                  <p className="text-xs font-normal text-secondary">
                    {affinity.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="flex flex-col gap-y-2 w-full">
            <h2 className="text-sm font-semibold text-secondary/95">
              Atuações
            </h2>

            {course.actions.map((action) => (
              <p
                key={action}
                className={`py-2 px-4 ${color} shadow-sm shadow-black/5 rounded-lg text-sm font-normal text-secondary`}
              >
                {action}
              </p>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
