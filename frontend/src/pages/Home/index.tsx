import { useState } from "react";
import { tv } from "tailwind-variants";

import { Navbar } from "./_components/Navbar";
import { HeaderFilter } from "./_components/HeaderFilter";
import { Courses } from "./_components/Courses";
import { Introduction } from "./_components/Introduction";
import { Separator } from "../../components/ui/separator";
import AiButton from "./_components/AiButton";

const containerMain = tv({
  base: "flex flex-col gap-y-8 min-w-full min-h-screen py-20 font-inter",
});

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  return (
    <main className={containerMain()}>
      <Navbar />

      <HeaderFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        search={search}
        setSearch={setSearch}
      />

      <Separator />

      <Courses activeFilter={activeFilter} search={search} />

      <Introduction />

      <AiButton />
    </main>
  );
};

export default Home;
