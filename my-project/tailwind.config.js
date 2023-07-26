/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        posttextcolor: "rgba(0, 0, 0, 0.70)",
        cardtextblack: "#26303E",
        cardtextgray: "#5C6672",
        navdrawtextgray: "rgba(0, 0, 0, 0.45)",
        navdrawbg: "#F5F5F5",
        pcolor: "#4F359B",
        navdrawn2color: "#485B69",
        modaltextblack: "rgba(0, 0, 0, 0.70)",
      },
      borderRadius: {
        lg: "0.7rem",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
