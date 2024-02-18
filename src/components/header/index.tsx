
import logo from "../../assets/code-challenge.png";
import styles from "./index.module.css";

const Header = (props: {
  className?: string;
  onMenuIconClicked: () => void;
}) => (
  <header className={`${styles.container} ${props.className}`}>
    <span className={styles.menuAndLogo}>
      <button aria-label="menu toggle" onClick={props.onMenuIconClicked}>
        ☰
      </button>

      <div className={styles.logoContainer}>
        <img src={logo} alt="application-logo" height={20} width={200} />
      </div>
    </span>
  </header>
);

export default Header;
