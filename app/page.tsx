"use client";

import confetti from "canvas-confetti";

export default function Home() {
  function handleConfetti() {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });
  }

  return (
    <main>
      <h1>Hello World!</h1>
      <button onClick={handleConfetti}>Konfetti</button>
    </main>
  );
}
