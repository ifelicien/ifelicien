import styles from './Header.module.css'

function Header() {
    return (
    <header className={styles.header}>
      <h1>Irwin Felicien</h1>
      {/* <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Education</a></li>
        <li><a href="#">Contacts</a></li>
      </ul> */}

      <h3>Full-Stack Software Developer</h3>
    </header>
  );
}

export default Header;
