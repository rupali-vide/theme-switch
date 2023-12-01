import React, { useContext } from "react";
import "./ThemeToggle.scss";
import { ThemeContext } from "../../Theme";

export default function ThemeToggle() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        checked={theme === "light-theme"}
        onClick={() => toggleTheme()}
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <i className="fas fa-sun" />
        <i className="fas fa-moon" />
        <span className="ball" />
      </label>
    </div>
  );
}
