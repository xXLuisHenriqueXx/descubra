import type { ReactNode } from "react";
import { tv } from "tailwind-variants";

const ContainerStyles = tv({
  slots: {
    containerMain:
      "relative flex flex-col items-center gap-y-8 min-w-full min-h-full px-4 lg:px-8 py-16 bg-background overflow-hidden",
    containerSection: "flex flex-col w-full",
  },
});

const { containerMain, containerSection } = ContainerStyles();

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <main className={containerMain()}>
      <section className={containerSection()}>{children}</section>
    </main>
  );
};

export default Container;
