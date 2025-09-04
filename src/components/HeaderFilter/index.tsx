import { GraduationCap } from "lucide-react";
import { useState } from "react";

export const HeaderFilter = () => {
  const [activeFilter, setActiveFilter] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  return (
    <section className="w-full px-4">
      <article className="flex flex-col gap-y-8 p-4 bg-secondary/5 rounded-xl">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-sm font-semibold text-secondary/95">
            Pesquisar cursos
          </h2>

          <div className="flex flex-row items-center gap-x-4 w-full py-2 px-4 bg-secondary/5 border border-primary/95 rounded-lg">
            <GraduationCap className="w-6 h-6 text-secondary" strokeWidth={2} />

            <input
              type="text"
              className="w-full bg-transparent outline-none text-sm font-regular text-secondary"
              placeholder="Digite o nome do curso"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <h2 className="text-sm font-semibold text-secondary/95">
            Categorias
          </h2>

          <div className="flex flex-col items-center gap-y-2 w-full">
            <p
              className="w-full px-4 py-2 bg-process/5 hover:bg-process/10 border border-process/95 rounded-lg cursor-pointer transition-all duration-300 text-sm font-regular text-process text-center"
              onClick={() => setActiveFilter("process")}
            >
              Processos e Produtividade
            </p>

            <p
              className="w-full px-4 py-2 bg-ecosystem/5 hover:bg-ecosystem/10 border border-ecosystem/95 rounded-lg cursor-pointer transition-all duration-300 text-sm font-regular text-ecosystem text-center"
              onClick={() => setActiveFilter("ecosystem")}
            >
              Ambientes e Ecossistemas
            </p>

            <p
              className="w-full px-4 py-2 bg-energy/5 hover:bg-energy/10 border border-energy/95 rounded-lg cursor-pointer transition-all duration-300 text-sm font-regular text-energy text-center"
              onClick={() => setActiveFilter("energy")}
            >
              Energia e Comunicação
            </p>

            <p
              className="w-full px-4 py-2 bg-project/5 hover:bg-project/10 border border-project/95 rounded-lg cursor-pointer transition-all duration-300 text-sm font-regular text-project text-center"
              onClick={() => setActiveFilter("project")}
            >
              Projeto e Fabricação
            </p>

            <p
              className="w-full px-4 py-2 bg-tech/5 hover:bg-tech/10 border border-tech/95 rounded-lg cursor-pointer transition-all duration-300 text-sm font-regular text-tech text-center"
              onClick={() => setActiveFilter("tech")}
            >
              Tecnologia da Informação
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
