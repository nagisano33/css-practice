import { circle } from "../../../styled-system/patterns/circle";

export function Icon() {
  return (
    <div className={circle({ size: 12, overflow: "hidden" })}>
      <img
        src="https://pbs.twimg.com/profile_images/1727830694813204480/-jg2UFre_400x400.jpg"
        alt="icon"
        height="120px"
        width="120px"
      />
    </div>
  );
}
