import React ,{useContext} from "react";
import Navbar from "../../components/Navbar";
import './Layout.scss';
import sunLogo from "../../assets/images/sun.png";
import moonLogo from "../../assets/images/moon.png";
import { ThemeContext } from "../../Theme";
import BackgroundParticle from "../../components/BackgroundParticles";


export default function Layout() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className="container">
      {/* <BackgroundParticle/> */}
      <Navbar />
      <div className="bodyContainer">
      <img src={theme === "light-theme" ?  sunLogo : moonLogo} height={200}/>
      <p>{theme === "light-theme" ? "This is day mode" : "This is night mode"}</p>
      </div>
    </div>
  );
}
