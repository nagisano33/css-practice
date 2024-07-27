import { css } from "../../../styled-system/css/css";

export function UserName() {
  return (
    <div>
      <h2 className={css({ fontWeight: 600 })}>なぎさの</h2>
      <p className={css({ color: "gray.weak" })}>@nagisa_no33</p>
    </div>
  );
}
