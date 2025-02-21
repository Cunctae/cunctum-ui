import "./progress.css";

export interface ProgressProps {
    value: number;
    max: number
    indeterminate?: boolean;

}

export const createProgress = ({ value, max, indeterminate }: ProgressProps) => {
    const progress = document.createElement("progress");

    progress.max = max;

    if (indeterminate) {
        progress.style.setProperty("--c", "100%")
        progress.removeAttribute('value');
    } else {
        progress.value = value;
    }

    progress.className = ["progress", `progress--${value}`, `progress--${max}`].join(
        " "
    );

    return progress;
};
