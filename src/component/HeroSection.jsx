import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../color";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
        height: "95.4vh",
      }}
    >
      <h1>This is Context API Theme Toggler</h1>
      <p>This is paragraph.</p>
      <button
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#fff",
          border: `${currentTheme.border}`,
        }}
      >
        {themeMode === "light" ? "Dark Mode: On" : "Dark Mode: Off"}
      </button>
    </div>
  );
};

export default HeroSection;
