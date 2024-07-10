/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aliceblue: {
          "100": "#f0f9fe",
          "200": "#e5f2fb",
        },
        white: "#fff",
        gray: {
          "100": "#101828",
          "200": "rgba(255, 255, 255, 0.8)",
        },
        royalblue: "#447ef7",
        lightslategray: "#758eb3",
        darkslateblue: {
          "100": "#272765",
          "200": "#222161",
        },
        black: "#000",
        mediumseagreen: "#0eb582",
        lightcyan: {
          "100": "#cdf0f4",
          "200": "rgba(207, 240, 230, 0.5)",
        },
        darkturquoise: "#03b3c6",
        cornflowerblue: {
          "100": "#1b8ad6",
          "200": "#027dd1",
        },
        lightblue: "#cce5f6",
        gainsboro: "#e6e6e6",
        "base-base-black": "#0b0a0a",
        "base-base-white": "#fafafa",
      },
      spacing: {},
      fontFamily: {
        "gilroy-bold": "Gilroy-Bold",
        inter: "Inter",
        "gilroy-medium": "Gilroy-Medium",
        "gilroy-semibold": "Gilroy-SemiBold",
      },
      borderRadius: {
        "4xl": "23px",
        "3xs": "10px",
        "11xl": "30px",
        "22xl-4": "41.4px",
        "81xl": "100px",
        "31xl": "50px",
        "18xl-3": "37.3px",
        "18xl": "37px",
        "247xl": "266px",
      },
    },
    fontSize: {
      "3xl": "22px",
      lg: "18px",
      xl: "20px",
      base: "16px",
      "7xl": "26px",
      "2xl": "21px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      "31xl": "50px",
      "11xl": "30px",
      "41xl": "60px",
      "17xl": "36px",
      "29xl": "48px",
      lgi: "19px",
      "9xl": "28px",
      "25xl": "44px",
      "16xl": "35px",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
