import "./label.css";

export interface LabelProps {
  type?: "h1" | "h2" | "p18" | "p16" | "p14" | "p12";
}

export const createLabel = ({ type }: LabelProps) => {
  let label;

  switch (type) {
    case "h1":
      label = document.createElement("h1");
      break;
    case "h2":
      label = document.createElement("h2");
      break;
    case "p18":
    case "p16":
    case "p14":
    case "p12":
      label = document.createElement("p");
      break;

    default:
      label = document.createElement("p");
      break;
  }

  label.innerHTML = "Label";

  label.className = ["label", `label--${type}`].join(
    " "
  );

  return label;
};
