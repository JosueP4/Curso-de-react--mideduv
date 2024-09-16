import "./App.css";
import { TwitterFolowCard } from "./TwitterFolowCard";

export function App() {
  return (
    <section className="app">
      <TwitterFolowCard

        userName="Youtube"
        name="josue Pujols"
      />
      <TwitterFolowCard

        userName="Reddit"
        name="Angel Luis "
      />

    </section>
  );
}
