import { tv } from "tailwind-variants";

const infoStyles = tv({
  slots: {
    containerMain: "flex flex-col gap-y-2",
    containerTitle: "flex flex-row items-end gap-x-1",
    title: "text-sm lg:text-base font-medium text-foreground",
    titleHighlight: "text-lg lg:text-xl text-primary",
    subtitle: "text-xs lg:text-sm font-semibold text-primary/75",
    textNormal:
      "text-xs/relaxed lg:text-sm/relaxed font-regular text-foreground/75 indent-4",
  },
});

const {
  containerMain,
  containerTitle,
  title,
  titleHighlight,
  subtitle,
  textNormal,
} = infoStyles();

interface IInfoProps {
  name: string;
  subname?: string;
  text: string;
}

export const Info = ({ name, subname, text }: IInfoProps) => {
  return (
    <article className={containerMain()}>
      <div className={containerTitle()}>
        <h1 className={title()}>
          Sobre <strong className={titleHighlight()}>{name}</strong>
        </h1>
        <p className={subtitle()}>{subname}</p>
      </div>

      <p className={textNormal()}>{text}</p>
    </article>
  );
};
