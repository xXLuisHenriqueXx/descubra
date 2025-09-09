import { Navbar } from "./components/Navbar";
import { Courses } from "./components/Courses";
import { Introduction } from "./components/Introduction";
import { HeaderFilter } from "./components/HeaderFilter";

function App() {
  return (
    <main className="flex flex-col gap-y-8 min-w-full min-h-screen py-20 font-inter">
      <Navbar />

      <HeaderFilter />

      <Courses />

      <Introduction />
    </main>
  );
}

export default App;
