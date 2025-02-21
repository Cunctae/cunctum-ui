import { coordinatesPaths } from './icon.paths';
import "./icon.css";

export interface IconProps {
  boxHeight: string;
  boxWidth: string;
  coordinates: string;
}

export const createIcon = ({  boxHeight = '15', boxWidth = '15', coordinates = coordinatesPaths['arrow-left']  }: IconProps) => {
  const xmlns = "http://www.w3.org/2000/svg";

  const icon = document.createElementNS(xmlns, "svg");
  icon.setAttributeNS(null, "viewBox", `0 0 ${boxWidth} ${boxHeight}`);
  icon.setAttributeNS(null, "width", boxWidth);
  icon.setAttributeNS(null, "height", boxHeight);


  const path = document.createElementNS(xmlns, "path");

  path.setAttributeNS(null, 'd', coordinates);
  path.setAttributeNS(null, 'fill', 'black');

  path.setAttributeNS(null, 'fill-rule', "evenodd");
  path.setAttributeNS(null, 'clip-rule', "evenodd");

  icon.appendChild(path);



  return icon
};
