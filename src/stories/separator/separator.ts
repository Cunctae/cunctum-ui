import "./separator.css";

export enum Orientation {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export interface SeparatorProps {
  orientation: Orientation;

}

export const createSeparator = ({ orientation }: SeparatorProps) => {
  const separator  = document.createElement("div");

  separator.className = ["separator", `separator--${orientation}`].join(
    " "
  );

  return separator;
};
