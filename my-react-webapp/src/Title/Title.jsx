import styles from "./Title.module.css";
import propTypes from "prop-types";

function Title(props) {
  return (
    <div className={styles.title}>
      <h3>{props.sectionName}</h3>
    </div>
  );
}
Title.propTypes = {
  sectionName: propTypes.string,
};
export default Title;
