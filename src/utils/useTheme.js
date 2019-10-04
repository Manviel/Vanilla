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
      const control = document.querySelectorAll(".control");

      if (localTheme === "dark") {
        light.classList.add("dark");
        control.forEach(i => i.classList.add("pallette"));
      } else {
        light.classList.remove("dark");
        control.forEach(i => i.classList.remove("pallette"));
      }
    }
  }, [theme]);

  return [theme, toggleTheme];
};
