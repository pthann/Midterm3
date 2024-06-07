import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/layouts/Home";
import { Navbar } from "./components/layouts/Navbar";
import { useEffect, useState } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  const savedDarkMode = localStorage.getItem("isDarkMode") === "true";

  const [isDarkMode, setIsDarkMode] = useState(savedDarkMode);
  const [icon, setIcon] = useState(savedDarkMode ? faMoon : faSun);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setIcon(!isDarkMode ? faMoon : faSun);
  };
  return (
    <>
<div className="App ">
      <Router>

    <div className="App ">

        <Navbar />
        <div className="toggle-theme">
            <FontAwesomeIcon
              icon={icon}
              onClick={toggleTheme}
              style={{ color: "yellow" }}
            />
          </div>
        <Home />
        </div>
      </Router>
    </div>
    </>
    
  );
}
export default App;
