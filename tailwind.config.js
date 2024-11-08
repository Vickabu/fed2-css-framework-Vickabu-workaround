/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./{auth,post,profile}/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#115e59",
        darkGreen: "#042f2e",
        lightGreen: "#D1FAE5",
        orange: "#c2410c",
        orangeDark: "#9a3412",
      },
      spacing: {
        "p-4": "1rem",
      },
      borderRadius: {
        sm: "4px",
        lg: "8px",
      },
      borderColor: {
        "dark-green-transparent": "rgba(4, 47, 46, 0.25)",
      },
      boxShadow: {
        linkDeskTopShadow: "0 -3px 2px 0px rgba(38, 120, 113, 0.6)",
        shadowDarkGreen: "0px 4px 10px rgba(4, 47, 46, 0.6)",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".logoutButton": {
          backgroundColor: "#c2410c",
          color: "white",
          fontWeight: "bold",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          borderRadius: "0.375rem",
          cursor: "pointer",
        },
        ".logoutButton:hover": {
          textDecoration: "underline",
          backgroundColor: "#9a3412",
        },

        ".form-heading": {
          textAlign: "center",
          fontWeight: "700",
          fontSize: "1.5rem",
          marginBottom: "1rem",
          padding: "0.5rem",
          borderBottom: "1px solid rgba(4, 47, 46, 0.25)",
        },

        ".form-container": {
          maxWidth: "27rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2rem",
          padding: "2rem",
          backgroundColor: "white",
          borderRadius: "0.5rem",
          boxShadow: "0px 4px 10px rgba(4, 47, 46, 0.6)",
        },
        ".form-input": {
          width: "100%",
          marginTop: "0.25rem",
          marginBottom: "1rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          border: "1px solid rgba(4, 47, 46, 0.25)",
          borderRadius: "0.375rem",
          outline: "none",
          boxShadow: "0px 4px 10px rgba(4, 47, 46, 0.25)",
        },
        ".form-button": {
          width: "100%",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          marginBottom: "0.5rem",
          marginTop: "1rem",
          backgroundColor: "#115e59",
          color: "white",
          fontWeight: "700",
          borderRadius: "0.375rem",
        },

        ".form-button:hover": {
          backgroundColor: "#042f2e",
          boxShadow: "0px 4px 10px rgba(4, 47, 46, 0.6)",
        },
        ".form-button:focus": {
          outline: "none",
        },
        ".form-link": {
          color: "#3b82f6",
          textDecoration: "underline",
          display: "block",
          textAlign: "center",
        },
        ".form-textarea": {
          width: "100%",
          marginTop: "0.25rem",
          padding: "0.5rem 1rem",
          border: "1px solid rgba(4, 47, 46, 0.25)",
          borderRadius: "0.375rem",
          outline: "none",
          boxShadow: "0px 4px 10px rgba(4, 47, 46, 0.25)",
        },
      });
    },
  ],
};
