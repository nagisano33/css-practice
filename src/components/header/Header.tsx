import { css } from "../../../styled-system/css";

export default function Header() {
  return (
    <div
      className={css({
        height: "80px",
        width: "100%",
        color: "text.title",
        background: "bg.title",
        fontWeight: "title",
      })}
    >
      <ul
        className={css({
          listStyle: "none",
          display: "flex",
          padding: "16px",
          alignItems: "end",
          gap: 3,
        })}
      >
        <li>home</li>
        <li>about</li>
        <li>recruit</li>
      </ul>
    </div>
  );
}
