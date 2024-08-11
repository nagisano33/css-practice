import { css } from "../styled-system/css/css";
import { container } from "../styled-system/patterns";
import { Card } from "./Card/Card";
import Header from "./components/header/Header";

function App() {
  return (
    <div
      className={container({
        flex: 1,
        width: "100%",
        maxWidth: "1280px",
        minHeight: "100vh",
        background: "bg",
      })}
    >
      <Header />
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          gap: 8,
          flexWrap: "wrap",
        })}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
