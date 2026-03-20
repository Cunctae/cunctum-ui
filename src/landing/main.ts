import "../style.css";
import "./landing.css";

import {
  createAvatar,
  createButton,
  createCard,
  createIcon,
  createInput,
  createLabel,
  createProgress,
  createSeparator,
  Orientation,
  coordinatesPaths,
} from "../index";

const app = document.getElementById("app")!;

const landing = document.createElement("div");
landing.className = "landing";

// --- Hero ---
const hero = document.createElement("div");
hero.className = "landing__hero";

const logo = document.createElement("img");
logo.src = "/cuntae.png";
logo.alt = "Cunctae logo";
hero.appendChild(logo);

const title = createLabel({ type: "h1" });
title.textContent = "CunctumUI";
hero.appendChild(title);

const subtitle = createLabel({ type: "p18" });
subtitle.textContent = "A vanilla TypeScript component library built with atomic design.";
hero.appendChild(subtitle);

landing.appendChild(hero);

// --- Helper to create a section ---
function section(name: string, vertical = false): { wrapper: HTMLElement; row: HTMLElement } {
  const wrapper = document.createElement("div");
  wrapper.className = "landing__section";

  const heading = document.createElement("h2");
  heading.className = "landing__section-title";
  heading.textContent = name;
  wrapper.appendChild(heading);

  const row = document.createElement("div");
  row.className = vertical ? "landing__row landing__row--vertical" : "landing__row";
  wrapper.appendChild(row);

  landing.appendChild(wrapper);
  return { wrapper, row };
}

// --- Buttons ---
const buttons = section("Button", true);
buttons.row.appendChild(createButton({ style: "outlined", size: "small", label: "Small Outlined", onClick: () => ({}) }));
buttons.row.appendChild(createButton({ style: "outlined", size: "medium", label: "Medium Outlined", onClick: () => ({}) }));
buttons.row.appendChild(createButton({ style: "outlined", size: "large", label: "Large Outlined", onClick: () => ({}) }));
buttons.row.appendChild(createButton({ style: "filled", size: "small", label: "Small Filled", onClick: () => ({}) }));
buttons.row.appendChild(createButton({ style: "filled", size: "medium", label: "Medium Filled", onClick: () => ({}) }));
buttons.row.appendChild(createButton({ style: "filled", size: "large", label: "Large Filled", onClick: () => ({}) }));

// --- Avatar ---
const avatars = section("Avatar");
avatars.row.appendChild(createAvatar({ size: "small", iconType: "emoji" }));
avatars.row.appendChild(createAvatar({ size: "medium", iconType: "emoji" }));
avatars.row.appendChild(createAvatar({ size: "large", iconType: "emoji" }));

// --- Label ---
const labels = section("Label", true);
const h1 = createLabel({ type: "h1" });
h1.textContent = "Heading 1";
labels.row.appendChild(h1);

const h2 = createLabel({ type: "h2" });
h2.textContent = "Heading 2";
labels.row.appendChild(h2);

const p16 = createLabel({ type: "p16" });
p16.textContent = "Body 16px paragraph";
labels.row.appendChild(p16);

// --- Input ---
const inputs = section("Input");
inputs.row.appendChild(createInput({ placeholder: "Text input", type: "text", checked: false, color: "", min: "", max: "", step: "", value: "" }));
inputs.row.appendChild(createInput({ placeholder: "", type: "checkbox", checked: true, color: "", min: "", max: "", step: "", value: "" }));
inputs.row.appendChild(createInput({ placeholder: "", type: "range", checked: false, color: "", min: "0", max: "100", step: "1", value: "50" }));
inputs.row.appendChild(createInput({ placeholder: "", type: "color", checked: false, color: "#A80A00", min: "0", max: "100", step: "1", value: "50" }));

// --- Card ---
const cards = section("Card");
cards.row.appendChild(createCard({ size: "small", title: "Small Card", description: "A compact card component." }));
cards.row.appendChild(createCard({ size: "medium", title: "Medium Card", description: "A wider card with more room." }));

// --- Progress ---
const progress = section("Progress");
progress.row.appendChild(createProgress({ value: 30, max: 100 }));
progress.row.appendChild(createProgress({ value: 75, max: 100 }));
progress.row.appendChild(createProgress({ value: 0, max: 100, indeterminate: true }));

// --- Separator ---
const separators = section("Separator");
separators.row.appendChild(createSeparator({ orientation: Orientation.HORIZONTAL }));
separators.row.appendChild(createSeparator({ orientation: Orientation.VERTICAL }));


// --- Icon ---
const icons = section("Icon");
for (const [name, path] of Object.entries(coordinatesPaths)) {
  const wrap = document.createElement("div");
  wrap.title = name;
  wrap.appendChild(createIcon({ height: "24", width: "24", coordinates: path }));
  icons.row.appendChild(wrap);
}

// --- Storybook link ---
const storybookContainer = document.createElement("div")
const storybookLink = document.createElement("a");
storybookContainer.className = "landing__storybook-link";
storybookLink.href = "/cunctum-ui/storybook/";
storybookLink.target = "_blank";
storybookContainer.appendChild(storybookLink)
storybookLink.appendChild(createButton({ style: "filled", size: "large", label: "View Full Storybook →", onClick: () => ({}) }));
hero.appendChild(storybookContainer);

app.appendChild(landing);
