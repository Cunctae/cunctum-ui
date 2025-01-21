import "./button.css";

export interface ButtonProps {
  style: "outlined" | "filled";
  size: "small" | "medium" | "large";
  label: string;
  onClick: () => {}
}

export const createButton = ({
  style = "outlined",
  size = "small",
  label,
  onClick
}: ButtonProps) => {
  const button = document.createElement("button");

  button.type = "submit";
  button.role = "button";
  button.ariaLabel = `Button of type ${style}`

  button.innerText = label;
  button.addEventListener('click', onClick)
  button.className = ["button", `button--${style}`, `button--${size}`].join(
    " "
  );

  return button;
};
