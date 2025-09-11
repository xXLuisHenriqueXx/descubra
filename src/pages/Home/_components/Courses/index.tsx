import { useState } from "react";
import { tv } from "tailwind-variants";

import { Header } from "./_components/Header";
import { GeneralInfo } from "./_components/GeneralInfo";
import { List } from "./_components/List";

import { CoursesData } from "../../../../static/CoursesData";
import { Card, CardContent } from "../../../../components/ui/card";

const coursesStyles = tv({
  slots: {
    containerMain: "flex flex-col items-center px-4",
    text: "text-center text-sm text-foreground/75",
  },
});

const { containerMain, text } = coursesStyles();

interface ICoursesProps {
  activeFilter: string;
  search: string;
}

export const Courses = ({ activeFilter, search }: ICoursesProps) => {
  const [visible, setVisible] = useState<Record<string, boolean>>({});

  const toggleVisibility = (id: string) => {
    setVisible((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredSections = CoursesData.filter((section) => {
    const matchCategory = activeFilter ? section.id === activeFilter : true;
    const matchSearch = search
      ? section.courses.some((c) =>
          c.title.toLowerCase().includes(search.toLowerCase())
        )
      : true;
    return matchCategory && matchSearch;
  }).map((section) => {
    if (search) {
      return {
        ...section,
        courses: section.courses.filter((c) =>
          c.title.toLowerCase().includes(search.toLowerCase())
        ),
      };
    }
    return section;
  });

  return (
    <>
      {filteredSections.length > 0 ? (
        filteredSections.map((section) => (
          <section key={section.id} id={section.id} className={containerMain()}>
            <Header data={section} />

            <GeneralInfo data={section} />

            <List
              data={section}
              visible={visible}
              toggleVisibility={toggleVisibility}
            />
          </section>
        ))
      ) : (
        <section className={containerMain()}>
          <Card className="w-full">
            <CardContent>
              <p className={text()}>Nenhum curso encontrado</p>
            </CardContent>
          </Card>
        </section>
      )}
    </>
  );
};
