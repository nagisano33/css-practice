import { RecipeVariantProps, cva } from "../../styled-system/css";

export const skelton = cva({
  base: {
    position: "relative",
    background: "{colors.skelton.bg}",
    overflow: "hidden",
    _before: {
      // なぜかただの空文字じゃだめ
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 100,
      display: "block",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(90deg, transparent, {colors.skelton.shining}, transparent)",
      animationName: "shine",
      animationDuration: "1.2s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    },
  },
  variants: {
    type: {
      icon: {
        display: "inline-block",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
      },
      paragraph: { display: "block", borderRadius: "4px", height: "16px" },
    }
  },
  defaultVariants: {
    type: "paragraph",
  },
});

export type SkeltonVariants = RecipeVariantProps<typeof skelton>;
