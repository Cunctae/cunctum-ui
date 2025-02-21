import "./input.css";
import { InputType } from "./input.types";

export interface InputProps {
  placeholder: string;
  type: InputType;
  checked: boolean;
  color: string;
  min: string;
  max: string;
  step: string;
}

export const createInput = ({
  placeholder,
  type = "text",
  checked = true,
  color,
  min,
  max,
  step,
}: InputProps) => {
  const input = document.createElement("input");

  input.placeholder = placeholder;
  input.type = type;
  input.ariaLabel = `Input of type ${type}`

  if (input.type === "checkbox") {
    input.checked = checked;
    input.role = 'checkbox'
  }

  if (input.type === "color") {
    input.value = color || "#ba68c8";
  }
  
  if (input.type === "range") {
    input.min = min;
    input.max = max;
    input.step = step;
    input.role = 'slider'
  }

  input.className = ["input", `input--${type}`].join(" ");

  return input;
};
