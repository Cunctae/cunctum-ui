import "./avatar.css";

export interface AvatarProps {
  size?: "small" | "medium" | "large";
  iconType?: "emoji" | "image";
}

export const createAvatar = ({
  size = "large",
  iconType = "image",
}: AvatarProps) => {
  const avatar = document.createElement("div");

  let icon;

  if (iconType === "emoji") {
    icon = document.createElement("p");
    icon.innerHTML = "🥸";
  } else {
    icon = document.createElement("img");
    icon.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png";
    icon.draggable = false;
    icon.alt = `Avatar ${iconType}`;
  }
  icon.className = ["avatar__icon", `avatar__icon--${iconType}--${size}`].join(
    " "
  );

  avatar.appendChild(icon);

  avatar.className = "avatar";

  avatar.className = ["avatar", `avatar--${size}`].join(" ");

  return avatar;
};
