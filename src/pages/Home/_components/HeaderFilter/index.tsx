import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

interface IHeaderFilterProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  search: string;
  setSearch: (search: string) => void;
}

export const HeaderFilter = ({
  activeFilter,
  setActiveFilter,
  search,
  setSearch,
}: IHeaderFilterProps) => {
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
              {[
                { id: "process", label: "Processos e Produtividade" },
                { id: "ecosystem", label: "Ambientes e Ecossistemas" },
                { id: "energy", label: "Energia e Comunicação" },
                { id: "project", label: "Projeto e Fabricação" },
                { id: "tech", label: "Tecnologia da Informação" },
              ].map((cat) => (
                <p
                  key={cat.id}
                  className={`w-full px-4 py-2 border rounded-lg cursor-pointer transition-all duration-300 text-sm font-regular text-center
                    ${
                      activeFilter === cat.id
                        ? `bg-${cat.id}/20 border-${cat.id}/95 text-${cat.id}`
                        : `bg-${cat.id}/5 hover:bg-${cat.id}/10 border-${cat.id}/95 text-${cat.id}`
                    }`}
                  onClick={() =>
                    setActiveFilter(activeFilter === cat.id ? "" : cat.id)
                  }
                >
                  {cat.label}
                </p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
