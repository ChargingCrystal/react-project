import { useState } from "react";
import confetti from "canvas-confetti";
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
        <div style={{ display: "flex", gap: "10px" }}>
          <Button variant="secondary" onClick={toggleTheme}>
            Theme: {theme}
          </Button>

          <Button
            onClick={() =>
              confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 },
              })
            }
          >
            Konfetti
          </Button>
        </div>
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