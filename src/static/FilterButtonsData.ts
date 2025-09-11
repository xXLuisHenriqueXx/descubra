interface IFilterButton {
  id: "process" | "ecosystem" | "energy" | "project" | "tech";
  label: string;
}

export const filterButtonsData: IFilterButton[] = [
  { id: "process", label: "Processos e Produtividade" },
  { id: "ecosystem", label: "Ambientes e Ecossistemas" },
  { id: "energy", label: "Energia e Comunicação" },
  { id: "project", label: "Projeto e Fabricação" },
  { id: "tech", label: "Tecnologia da Informação" },
];
