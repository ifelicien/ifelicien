import styles from './Ball.module.css';

function Ball() {
  return (
    <div className={styles.Ball}>
      <h1>Gradient Ball Example</h1>
      <Ball />
    </div>
  );
}

export default Ball;