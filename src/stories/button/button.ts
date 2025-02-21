import "./button.css";

export interface ButtonProps {
  style: "outlined" | "filled";
  size: "small" | "medium" | "large";
  label: string;
}

export const createButton = ({
  style = "outlined",
  size = "small",
  label,
}: ButtonProps) => {
  const button = document.createElement("button");

  button.type = "submit";
  button.role = "button";
  button.innerText = label;
  button.className = ["button", `button--${style}`, `button--${size}`].join(
    " "
  );

  return button;
};
