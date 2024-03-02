import styles from "./About.module.css";
// singular card spanning the width of the page
function About() {
  return (
    <div className={styles.about}>
      <img src="https://placehold.jp/250x250.png" alt="" />
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
