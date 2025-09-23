import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen mt-16">
      <Loader2 size={64} className="animate-spin" />
    </section>
  );
};

export default Loader;
