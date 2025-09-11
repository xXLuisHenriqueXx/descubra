import { useState } from "react";

import { Header } from "./_components/Header";
import { GeneralInfo } from "./_components/GeneralInfo";
import { List } from "./_components/List";

import { CoursesData } from "../../../../static/CoursesData";

export const Courses = () => {
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
  return (
    <>
      {CoursesData.map((section) => (
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
      ))}
    </>
  );
};
