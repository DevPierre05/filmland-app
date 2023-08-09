import { useState, useEffect } from "react";
import IconSun from "../assets/icons8-sun-50.svg";
import IconMoon from "../assets/icons8-moon-40.png";
export default function DarkLight() {
  const [theme, setTheme] = useState(
    () => JSON.parse(localStorage.getItem("theme")) || false
  );

  const element = document.documentElement;

  useEffect(() => {
    switch (theme) {
      case true:
        element.classList.add("dark");
        localStorage.setItem("theme", true);
        break;
      case false:
        element.classList.remove("dark");
        localStorage.setItem("theme", false);
        break;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  const handleSwitch = function () {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className="flex justify-end pr-4">
      <div onClick={handleSwitch} className="mt-6 text-center">
        {theme ? (
          <img src={IconSun} alt="icon-day" title="Switch to Day mode" className="w-6 h-6" />
        ) : (
          <img src={IconMoon} alt="icon-night" title="Switch to Night mode" className="w-6 h-6" />
        )}
      </div>
    </div>
  );
}
