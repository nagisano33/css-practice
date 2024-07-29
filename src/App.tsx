import { css } from "../styled-system/css/css";
import { stack } from "../styled-system/patterns";
import { Card } from "./Card/Card";

function App() {
  return (
    <div
      className={stack({
        flex: 1,
        width: "100%",
        minHeight: "100vh",
        alignItems: "center",
        background: "bg",
      })}
    >
      <div
        className={css({
          height: "80px",
          width: ["100%", "80%", "60%"],
          color: "text.title",
          background: "bg.title",
          fontWeight: "title",
        })}
      >
        <header>ヘッダー</header>
      </div>
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
