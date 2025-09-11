import { Navbar } from "./_components/Navbar";
import { HeaderFilter } from "./_components/HeaderFilter";
import { Courses } from "./_components/Courses";
import { Introduction } from "./_components/Introduction";
import { useState } from "react";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  return (
    <main className="flex flex-col gap-y-8 min-w-full min-h-screen py-20 font-inter">
      <Navbar />

      <HeaderFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        search={search}
        setSearch={setSearch}
      />

      <Courses activeFilter={activeFilter} search={search} />

      <Introduction />
    </main>
  );
};

export default Home;
