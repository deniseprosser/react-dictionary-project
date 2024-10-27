import "./App.css";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="autumn" />
      </div>
      <footer className="text-center">
        This project was coded by{" "}
        <a
          href="https://github.com/deniseprosser"
          target="_blank"
          rel="noreferrer"
        >
          Denise Prosser
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/deniseprosser/react-dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://zesty-kashata-fa5ed8.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
