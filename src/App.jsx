import { useState } from "react";
import "./App.css";
import { FollowCard } from "./components/follow-card/FollowCard";
import { DRIVERS } from "./data/drivers";

function App() {
  const [randomDrivers] = useState(() => {
    return [...DRIVERS].sort(() => Math.random() - 0.5).slice(0, 3);
  });

  return (
    <>
      <section className="x-section">
        <p className="x-section-title">Who to follow</p>
        {randomDrivers.map(({ username, name, id }) => (
          <FollowCard key={id} username={username} name={name} />
        ))}
      </section>
    </>
  );
}

export default App;
