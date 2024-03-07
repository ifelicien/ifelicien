import styles from "./Projects.module.css";
import propTypes from "prop-types";
//three cards spanning the width of the page with project details
function Projects(props) {
  return (
    <div className={styles.projects}>
      <img src={props.image} />
      <h2>{props.name}</h2>
      <p>{props.summary}</p>
    </div>
  );
}
Projects.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  summary: propTypes.string,
};
export default Projects;