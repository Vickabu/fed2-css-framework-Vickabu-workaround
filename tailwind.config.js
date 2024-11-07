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
      boxShadow: {
        tealGlow: "0 4px 6px -1px rgba(38, 120, 113, 0.6)",
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

        ".form-container": {
          maxWidth: "24rem",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "1rem",
          backgroundColor: "white",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        },
        ".form-input": {
          width: "100%",
          marginTop: "0.25rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          border: "1px solid #d1d5db",
          borderRadius: "0.375rem",
          outline: "none",
          boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
        },
        ".form-button": {
          width: "100%",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          marginTop: "1rem",
          backgroundColor: "green",
          color: "white",
          fontWeight: "700",
          borderRadius: "0.375rem",
        },

        ".form-button:hover": {
          backgroundColor: "#2563eb",
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
          border: "1px solid #D1D5DB",
          borderRadius: "0.375rem",
          outline: "none",
          boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
          resize: "none",
        },
      });
    },
  ],
};
