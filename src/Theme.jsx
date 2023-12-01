import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

// const getTheme = () => {
//   const theme = localStorage.getItem("theme");
//   if (!theme) {
//     localStorage.setItem("theme", "dark-theme");
//     return "dark-theme";
//   } else {
//     return theme;
//   }
// };

const ThemeProvider = ({ children }) => {
  // const [theme, setTheme] = useState(getTheme);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light-theme"
  );

  const addThemeToLocal = (theme) => {
    localStorage.setItem("theme", theme);
  };

  function toggleTheme() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
      addThemeToLocal("light-theme");
    } else {
      setTheme("dark-theme");
      addThemeToLocal("dark-theme");
    }
  }

  // useEffect(() => {
  //   const refreshTheme = () => {
  //     localStorage.setItem("theme", theme);
  //   };

  //   refreshTheme();
  // }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
