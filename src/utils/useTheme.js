import { useEffect, useState } from "react";

export default () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme) {
      setTheme(localTheme);

      const light = document.querySelector(".light");

      if (localTheme === "dark") {
        light.classList.add("dark");
      } else {
        light.classList.remove("dark");
      }
    }
  }, [theme]);

  return [theme, toggleTheme];
};
