import "./card.css";
import { createAvatar, AvatarProps } from "../avatar/avatar"; 
import { createLabel, LabelProps } from "../label/label"; 


export interface CardProps {
  size: "small" | "medium";
  title: string;
  description: string;
  avatarProps?: AvatarProps;
  labelProps?: LabelProps;
}

export const createCard = ({
  size = "small",
  title,
  description,
  avatarProps = { iconType: "emoji", size: 'medium'},
}: CardProps) => {
  const wrapper = document.createElement("div");
  const card = document.createElement("div");
  const content = document.createElement("div");
  const h3 = createLabel({type: 'h2'});
  const p = createLabel({type: 'p16'});
  

  wrapper.appendChild(card);
  card.appendChild(createAvatar(avatarProps));

  card.appendChild(content);

  content.appendChild(h3);
  content.appendChild(p);

  h3.innerHTML = title;
  p.innerHTML = description;

  wrapper.className = 'wrapper';
  content.className = 'card__content';
  card.className = ["card", `card--${size}`].join(" ");

  return wrapper;
};