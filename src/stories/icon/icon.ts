import { coordinatesPaths } from './icon.paths';
import "./icon.css";

export interface IconProps {
  height: string;
  width: string;
  coordinates: string;
}

export const createIcon = ({  height = '15', width = '15', coordinates = coordinatesPaths['arrow-left']  }: IconProps) => {
  const xmlns = "http://www.w3.org/2000/svg";

  const icon = document.createElementNS(xmlns, "svg");
  icon.setAttributeNS(null, "viewBox", '0 0 15 15');
  icon.setAttributeNS(null, "width", width);
  icon.setAttributeNS(null, "height", height);


  const path = document.createElementNS(xmlns, "path");

  path.setAttributeNS(null, 'd', coordinates);
  path.setAttributeNS(null, 'fill', 'black');

  path.setAttributeNS(null, 'fill-rule', "evenodd");
  path.setAttributeNS(null, 'clip-rule', "evenodd");

  icon.appendChild(path);

  return icon
};

class CunctumIcon extends HTMLElement {
  static get observedAttributes() {
    return ['height', 'width', 'coordinates'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const height = this.getAttribute('height') || '15';
    const width = this.getAttribute('width') || '15';
    const coordinates = this.getAttribute('coordinates') || coordinatesPaths['arrow-left'];

    const icon = createIcon({ height, width, coordinates });
    this.shadowRoot!.innerHTML = '';
    this.shadowRoot!.appendChild(icon);
  }
}

customElements.define('cunctum-icon', CunctumIcon);