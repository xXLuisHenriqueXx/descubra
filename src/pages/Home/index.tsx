import { Navbar } from "./_components/Navbar";
import { HeaderFilter } from "./_components/HeaderFilter";
import { Courses } from "./_components/Courses";
import { Introduction } from "./_components/Introduction";

const Home = () => {
  return (
    <main className="flex flex-col gap-y-8 min-w-full min-h-screen py-20 font-inter">
      <Navbar />

      <HeaderFilter />

      <Courses />

      <Introduction />
    </main>
  );
};

export default Home;
