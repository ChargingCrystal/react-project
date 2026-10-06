import { useState } from "react";
import {
  Button,
  Card,
  Input,
  Page,
  useFramework,
} from "./framework";

export default function App() {
  const { theme, toggleTheme } = useFramework();
  const [name, setName] = useState("");

  return (
    <Page
      title="Simple React Framework"
      subtitle="Kleine Demo-App auf Basis unseres eigenen Frameworks."
      actions={
        <Button variant="secondary" onClick={toggleTheme}>
          Theme: {theme}
        </Button>
      }
    >
      <div className="demo-grid">
        <Card title="Willkommen">
          <p>
            Diese Oberfläche nutzt Komponenten aus dem Ordner
            <code> src/framework </code>.
          </p>

          <Button onClick={() => alert("Framework funktioniert.")}>
            Testen
          </Button>
        </Card>

        <Card title="Input-Komponente">
          <Input
            label="Name"
            placeholder="Dein Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          {name && <p>Hallo, {name}.</p>}
        </Card>
      </div>
    </Page>
  );
}
