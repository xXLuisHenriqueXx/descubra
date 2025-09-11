import { tv } from "tailwind-variants";

import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

import { filterButtonsData } from "../../../../static/FilterButtonsData";

const headerFilterStyles = tv({
  slots: {
    containerMain: "w-full px-4",
    containerCard: "flex flex-col gap-y-8",
    containerContent: "flex flex-col gap-y-2",
    containerButtons: "flex flex-col items-center gap-y-2 w-full",
    title: "text-sm font-semibold text-foreground/95",
    input: "text-xs font-regular text-foreground",
    button:
      "w-full px-4 py-2 border rounded-lg cursor-pointer transition-all duration-300 text-sm font-regular text-center",
  },
  variants: {
    color: {
      process: {
        button: "hover:bg-process/10 border-process/50 text-process",
      },
      ecosystem: {
        button: "hover:bg-ecosystem/10 border-ecosystem/50 text-ecosystem",
      },
      energy: {
        button: "hover:bg-energy/10 border-energy/50 text-energy",
      },
      project: {
        button: "hover:bg-project/10 border-project/50 text-project",
      },
      tech: {
        button: "hover:bg-tech/10 border-tech/50 text-tech",
      },
    },
    active: {
      true: {
        button: "bg-opacity-20",
      },
      false: {
        button: "bg-opacity-0",
      },
    },
  },
  compoundVariants: [
    {
      color: "process",
      active: true,
      class: { button: "bg-process/20" },
    },
    {
      color: "ecosystem",
      active: true,
      class: { button: "bg-ecosystem/20" },
    },
    {
      color: "energy",
      active: true,
      class: { button: "bg-energy/20" },
    },
    {
      color: "project",
      active: true,
      class: { button: "bg-project/20" },
    },
    {
      color: "tech",
      active: true,
      class: { button: "bg-tech/20" },
    },
  ],
});

const {
  containerMain,
  containerCard,
  containerContent,
  containerButtons,
  title,
  input,
  button,
} = headerFilterStyles();

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
    <section className={containerMain()}>
      <Card>
        <CardContent className={containerCard()}>
          <div className={containerContent()}>
            <h2 className={title()}>Pesquisar cursos</h2>

            <Input
              type="text"
              className={input()}
              placeholder="Digite o curso ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <Separator />

          <div className={containerContent()}>
            <h2 className={title()}>Categorias</h2>

            <div className={containerButtons()}>
              {filterButtonsData.map((cat) => (
                <p
                  key={cat.id}
                  className={button({
                    color: cat.id,
                    active: activeFilter === cat.id,
                  })}
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
