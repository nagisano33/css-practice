import { css } from "../../styled-system/css";
import { stack, hstack } from "../../styled-system/patterns";
import { Icon } from "./components/Icon";
import { Post } from "./components/Post";
import { UserName } from "./components/UserName";

export function Card() {
  return (
    <div
      className={css({
        border: "3px solid #000",
        boxShadow: "4px 4px 0px #000",
        borderRadius: "13px",
        padding: 6,
        maxWidth: "388px",
      })}
    >
      <div className={stack({ gap: 4 })}>
        <div className={hstack({ gap: 4 })}>
          <Icon />
          <UserName />
        </div>
        <Post />
      </div>
    </div>
  );
}
