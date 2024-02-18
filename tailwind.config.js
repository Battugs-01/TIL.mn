/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_7f: "#ffffff7f",
          A700_19: "#ffffff19",
          A700_26: "#ffffff26",
          A700: "#ffffff",
          A700_1e: "#ffffff1e",
          A700_e5: "#ffffffe5",
        },
        blue: {
          100: "#cee0fa",
          700: "#0b63e5",
          900: "#0052b4",
          A400: "#1979ff",
          A200: "#338af3",
        },
        orange: { 100: "#ffd6a5", "100_01": "#ffe6a5" },
        light_blue: { 500: "#00aeeb", 800: "#0066b3", "900_19": "#00468c19" },
        gray: {
          50: "#f8f9fb",
          100: "#f2f2f2",
          200: "#f0f0f0",
          900: "#091242",
          "900_4f": "#0912424f",
          "900_0c": "#1018280c",
          "900_0f": "#151c270f",
          "100_02": "#f2f4f7",
          "100_01": "#f2f3f6",
          "50_19": "#f8f9fb19",
          "900_02": "#0f1728",
          "900_03": "#141414",
          "900_04": "#101828",
          "900_05": "#151c27",
          "900_01": "#1c1f35",
          "900_7f": "#031b377f",
        },
        yellow: { 700: "#ffb629", 800: "#f6b426", A700: "#ffd900" },
        blue_gray: {
          50: "#eaecf0",
          100: "#cfd4dc",
          300: "#9ba4b1",
          400: "#838e9e",
          500: "#666b89",
          700: "#475466",
          900: "#1d2838",
          "900_01": "#233651",
          "900_0a": "#061c3d0a",
          "300_01": "#98a1b2",
        },
        red: { 700: "#da2032", A700: "#d80027", A400: "#f61b45" },
        amber: { 300: "#ffd956", "300_01": "#ffd550" },
        indigo: {
          600: "#354ab5",
          900: "#101b55",
          "900_01": "#26326f",
          "900_02": "#1a2f5c",
          A200: "#6c6ce6",
          A400: "#435fe8",
        },
        green: { A400: "#25d56f" },
        black: { 900: "#000000", "900_26": "#00000026" },
      },
      boxShadow: {
        bs2: "0px -1px  1px 0px #233651",
        bs1: "0px 1px  2px 0px #1018280c",
        bs: "0px 6px  32px 0px #151c270f",
      },
      backgroundImage: {
        gradient: "linear-gradient(126deg ,#ffb629,#ffd956,#ffd6a5)",
        gradient1: "linear-gradient(224deg ,#6c6ce6,#1979ff)",
        gradient2: "linear-gradient(180deg ,#f8f9fb19,#00468c19)",
      },
      fontFamily: { rubik: "Rubik", krub: "Krub", inter: "Inter" },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
};
