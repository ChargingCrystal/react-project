# Simple React Framework

Ein kleines React-/TypeScript-Framework als Ausgangspunkt für ein Uni-Projekt.

## Start

```bash
npm install
npm run dev
```

## Struktur

```text
src/
├─ framework/
│  ├─ components/
│  │  ├─ Button.tsx
│  │  ├─ Card.tsx
│  │  ├─ Input.tsx
│  │  └─ Page.tsx
│  ├─ FrameworkProvider.tsx
│  ├─ framework.css
│  └─ index.ts
├─ App.tsx
├─ main.tsx
└─ app.css
```

## Idee

Die Demo-App nutzt möglichst nur die Komponenten und Funktionen aus `src/framework`.
Das Framework kapselt wiederverwendbare UI-Elemente und globale Einstellungen wie das Theme.

## Beispiel

```tsx
import { Button, Card, Page } from "./framework";

<Page title="Meine Seite">
  <Card title="Beispiel">
    <Button onClick={() => alert("Hi")}>Klick mich</Button>
  </Card>
</Page>
```

## Weiterbauen

Sinnvolle nächste Schritte:
- Modal-Komponente
- Navigation / Sidebar
- DataTable
- Form-Komponenten
- Routing
- API-Hook
- zusätzliche Themes
