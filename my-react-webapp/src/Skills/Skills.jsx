import styles from "./Skills.module.css";
import reactLogo from "../assets/react.svg";
import htmlLogo from "../assets/HTML logo.png";
import CSSLogo from "../assets/CSS_logo.png";
import cSharpLogo from "../assets/Csharp_Logo.png";
import BlazorLogo from "../assets/BlazorLogo.png";
import JavaLogo from "../assets/Java-Logo.png";

function Skills() {
  return (
    <>
      <div className={styles.skills}>
        <img src={reactLogo} alt="React Logo" />
        <img src={htmlLogo} alt="HTML Logo" />
        <img src={CSSLogo} alt="CSS Logo" />
        <img src={cSharpLogo} alt="C# Logo" />
        <img src={BlazorLogo} alt="Blazor Logo" />
        <img src={JavaLogo} alt="Blazor Logo" />
      </div>
    </>
  );
}
export default Skills;
