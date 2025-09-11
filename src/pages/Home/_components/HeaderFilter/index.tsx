import { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const HeaderFilter = () => {
  const [activeFilter, setActiveFilter] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  return (
    <section className="w-full px-4">
      <Card>
        <CardContent className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-sm font-semibold text-foreground/95">
              Pesquisar cursos
            </h2>

            <Input
              type="text"
              className="text-xs font-regular text-foreground"
              placeholder="Digite o curso ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <Separator />

          <div className="flex flex-col gap-y-2">
            <h2 className="text-sm font-semibold text-foreground/95">
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
        </CardContent>
      </Card>
    </section>
  );
};
