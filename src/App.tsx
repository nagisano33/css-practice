import { css } from "../styled-system/css/css";
import { stack } from "../styled-system/patterns";
import { Card } from "./Card/Card";

function App() {
  return (
    <div
      className={stack({
        width: "100%",
        alignItems: "center",
        background: "bg"
      })}
    >
      <div className={css({ height: "80px", color: "text.title", background: "bg.title", fontWeight: "title" })}>
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
