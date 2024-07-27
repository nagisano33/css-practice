import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          gray: {
            strong: { value: "#1A1A1A" },
            DEFAULT: { value: "#4D4D4D" },
            weak: { value: "#767676" },
            weaker: { value: "#999999" },
            weakest: { value: "#F2F2F2" },
          },
          blue: {
            strong: { value: "#0D17C1" },
            DEFAULT: { value: "#264AF4" },
            weak: { value: "#7096F8" },
            weakest: { value: "#E8F1FE" },
          },
        },

        fontWeights: {
          DEFAULT: { value: 400 },
          medium: { value: 500 },
          bold: { value: 700 },
        },
      },

      semanticTokens: {
        colors: {
          bg: {
            DEFAULT: { value: "{colors.gray.weakest}" },
            title: { value: "{colors.blue}" },
          },
          text: {
            DEFAULT: { value: "{colors.gray.strong}" },
            title: { value: "{colors.blue.weakest}" },
          },
        },

        fontWeights: {
          title: { value: "{fontWeights.bold}" }
        }
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
