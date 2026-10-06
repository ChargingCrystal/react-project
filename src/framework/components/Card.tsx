import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <section className="fw-card">
      {title && <h2 className="fw-card__title">{title}</h2>}
      {children}
    </section>
  );
}
