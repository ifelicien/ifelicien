import styles from "./About.module.css";
import headShot from "../assets/_DSC0009.png"
// singular card spanning the width of the page
function About() {
  return (
    <div className={styles.about}>
      <img src={headShot} alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, quisquam,
        voluptate quis id necessitatibus magni reprehenderit sunt consectetur at
        magnam aut nisi, animi ullam autem porro provident natus corporis
        nostrum.
      </p>
    </div>
  );
}
export default About;
