import { useState } from "react";

import { Header } from "./_components/Header";
import { GeneralInfo } from "./_components/GeneralInfo";
import { List } from "./_components/List";

import { CoursesData } from "../../../../static/CoursesData";
import { Card, CardContent } from "../../../../components/ui/card";

interface ICoursesProps {
  activeFilter: string;
  search: string;
}

export const Courses = ({ activeFilter, search }: ICoursesProps) => {
  const [visible, setVisible] = useState<Record<string, boolean>>({});

  const gradients: Record<string, string> = {
    process: "from-process/20 to-process/80",
    ecosystem: "from-ecosystem/20 to-ecosystem/80",
    energy: "from-energy/20 to-energy/80",
    project: "from-project/20 to-project/80",
    tech: "from-tech/20 to-tech/80",
  };

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
          <section
            key={section.id}
            id={section.id}
            className="flex flex-col items-center px-4"
          >
            <Header data={section} gradients={gradients} />

            <GeneralInfo data={section} />

            <List
              data={section}
              visible={visible}
              toggleVisibility={toggleVisibility}
            />
          </section>
        ))
      ) : (
        <section className="flex flex-col items-center px-4">
          <Card className="w-full">
            <CardContent>
              <p className="text-center text-sm text-foreground/75">
                Nenhum curso encontrado
              </p>
            </CardContent>
          </Card>
        </section>
      )}
    </>
  );
};
