import type { ReactNode } from "react";

type PageProps = {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export function Page({
  title,
  subtitle,
  actions,
  children,
}: PageProps) {
  return (
    <main className="fw-page">
      <header className="fw-page__header">
        <div>
          <h1 className="fw-page__title">{title}</h1>
          {subtitle && <p className="fw-page__subtitle">{subtitle}</p>}
        </div>

        {actions && <div>{actions}</div>}
      </header>

      {children}
    </main>
  );
}
