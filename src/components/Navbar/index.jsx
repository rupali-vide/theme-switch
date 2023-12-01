import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import headerLogo from "../../assets/images/headerlogo.png";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/inedx";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedNavItem, setSelectedNavItem] = useState("home");

  useEffect(() => {
    const currentRoute = location.pathname.substring(1);
    setSelectedNavItem(currentRoute || "home");
  }, [location.pathname]);

  const handleRedirect = (route) => {
    if (route === "home") {
      navigate("/");
    } else {
      navigate(`/${route}`);
      setSelectedNavItem(route);
    }
  };

  return (
    <header className="header">
      <div className="headerContent">
        <div className="logoContainer">
          <img src={headerLogo}  onClick={() => handleRedirect("home")}alt="logo" className="headerLogo" />
          <span onClick={() => handleRedirect("home")} className="tagName">Rupeme</span>
        </div>
        <div className="navbarList">
          <nav
            className={`navbarItems ${
              selectedNavItem === "home" ? "active" : ""
            }`}
            onClick={() => handleRedirect("home")}
          >
            Home
          </nav>
          <nav
            className={`navbarItems ${
              selectedNavItem === "about-us" ? "active" : ""
            }`}
            onClick={() => handleRedirect("about-us")}
          >
            About Us
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
