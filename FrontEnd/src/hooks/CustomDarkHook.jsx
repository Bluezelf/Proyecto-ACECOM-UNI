import { useState, useEffect } from "react";

const CustomDarkHook = () => {
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [darkMode]);
    return [darkMode, toggleDarkMode];
  };

export default CustomDarkHook;