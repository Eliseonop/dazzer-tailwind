module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      vd: ["22px"],
    },
    extend: {
      width: {
        330: "330px",
        250: "250px",
        524: "524px",
        92: "92px",
        970: "970px",
        640: "640px",
        870: "870px",
      },
      height: {
        1087: "1087px",
        987: "987px",
        59: "59px",
        36: "36px",
        120: "120px",
        25: "25px",
        250: "250px ",
      },
      spacing: {
        128: "32rem",
      },
      maxHeight: {
        128: "32rem",
      },
      colors: {
        "dark-Red-s": "#662323",
      },
      saturate: {
        25: ".25",
        75: ".75",
        600: "600%",
      },
      contrast: {
        8: "0.8",
      },
      hueRotate: {
        "-270": "-270deg",
        270: "270deg",
        "-50": "-50deg",
      },
    },
  },
  plugins: [],
};
