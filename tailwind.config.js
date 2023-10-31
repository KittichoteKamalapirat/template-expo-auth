// when edit them, have to edit in both this file and tailwind.config.js
const green = "#34d399";
const red = "#BC002D";

const primaryColor = red;
const primaryHoveredColor = "#cc002d";
// white grey and black
const grey0 = "#FFFFFF";
const grey50 = "#F5F0F0";
const grey100 = "#E0E0E0";
const grey300 = "#8F8F8F";
const grey500 = "#666666";
const grey700 = "#3D3D3D";
const grey850 = "#1F1F1F";
const grey900 = "#121212";

const bgColor = grey900;

// font family
const sansFamily = ["Arial", "sans-serif"];
const serifFamily = ["Arial", "sans-serif"];
const monoFamily = ["Montserrat", "Arial", "sans-serif"];
const japanFamily = ["NotoSansJP", "Roboto", "sans-serif"];

// font size
const fontSizeXS = "14px";
const fontSizeSM = "16px";
const fontSizeMD = "18px";
const fontSizeLG = "20px";
const fontSizeXL = "24px";
const fontSize2XL = "30px";
const fontSize3XL = "36px";

module.exports = {
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "380px",
      md: "420px",
      lg: "680px",
      tablet: "1024px",
    },
    extend: {
      maxWidth: {
        4: "4rem",
        6: "6rem",
        8: "8rem",
        10: "10rem",
        12: "12rem",
        14: "14rem",
        16: "16rem",
        18: "18rem",
      },
      width: {
        4.25: "1.0625rem",
        4.5: "1.125rem",
        13: "3.7rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        21: "5.25rem",
        22: "5.5rem",
        23: "5.75rem",
        45: "11.25rem",
        58: "14.5rem",
        68: "17rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
      },
      padding: {
        0.5: "0.125rem",
        0.75: "0.1875rem",
        1.25: "0.3125rem",
        1.5: "0.375rem",
        1.75: "0.4375rem",
        2.25: "0.5625rem",
        2.5: "0.625rem",
        3.5: "0.875rem",
        3.75: "0.9375rem",
        4.5: "1.125rem",
        4.75: "1.1875rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        23: "5.75rem",
        45: "11.25rem",
        68: "17rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
      },
      margin: {
        0.5: "0.125rem",
        0.75: "0.1875rem",
        1.25: "0.3125rem",
        1.5: "0.375rem",
        1.75: "0.4375rem",
        2.5: "0.625rem",
        3.75: "0.9375rem",
        4.5: "1.125rem",
        4.75: "1.1875rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        13: "3.25rem",
        17: "4.25rem",
        18: "4.5rem",
        21: "5.25rem",
        22: "5.5rem",
        23: "5.75rem",
        58: "14.5rem",
        68: "17rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
      },
      height: {
        4.25: "1.0625rem",
        4.5: "1.125rem",
        7.75: "1.9375rem",
        32.5: "32.5px",
      },
      borderRadius: {
        "5px": "5px",
        "10px": "10px",
        "4xl": "2rem",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        sans: sansFamily,
        serif: serifFamily,
        mono: monoFamily,
        japan: japanFamily,
      },

      // 8 10 12 16 20 24 32
      // xs sm md lg xl 2xl 3xl
      fontSize: {
        xs: fontSizeXS,
        sm: fontSizeSM,
        md: fontSizeMD,
        lg: fontSizeLG,
        xl: fontSizeXL,
        "2xl": fontSize2XL,
        "3xl": fontSize3XL,
      },
      colors: {
        grey: {
          0: grey0,
          50: grey50,
          100: grey100,
          300: grey300,
          500: grey500,
          700: grey700,
          850: grey850,
          900: grey900,
        },
        white: "#ffffff",
        black: "#000",
        primary: primaryColor,
        "primary-hovered": primaryHoveredColor,
        "bg-color": bgColor,
        green: green,
        red: red,
        yellow: "#FBBF24",
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ["responsive", "hover", "focus", "active"],
    },
  },
  plugins: [],
};
