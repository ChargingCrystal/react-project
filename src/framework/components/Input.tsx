import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, id, ...props }: InputProps) {
  const inputId =
    id ??
    (label
      ? `fw-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
      : undefined);

  return (
    <label className="fw-input-group" htmlFor={inputId}>
      {label && <span className="fw-input-group__label">{label}</span>}
      <input className="fw-input" id={inputId} {...props} />
    </label>
  );
}
