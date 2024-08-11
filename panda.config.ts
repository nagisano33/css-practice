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
            weak: { value: "gray.400" },
            weaker: { value: "gray.200" },
            weakest: { value: "gray.100" },
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
          skelton: {
            bg: { value: "{colors.gray.300}" },
            shining: { value: "{colors.gray.200}" },
          },
        },

        fontWeights: {
          title: { value: "{fontWeights.bold}" },
        },

        shadows: {
          card: { value: "4px 4px 0px {colors.gray.300}" },
        },

        borders: {
          card: { value: "3px solid {colors.gray.500}"}
        }
      },

      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
