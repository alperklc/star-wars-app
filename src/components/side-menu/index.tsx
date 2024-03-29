import { Link } from "wouter"
import { resourceTypes, resourcesMap } from "../../data";
import styles from "./index.module.css";

const SideMenu = (props: { visible: boolean; setVisibility: (_: boolean) => void }) => (
  <nav>
    {props.visible && (
      <div className={styles.backdrop} onClick={() => props.setVisibility(false)} />
    )}
    <div className={`${styles.content} ${props.visible ? styles.visible : ""}`}>
      <section className={styles.linksToPages}>
        <label>Links</label>

        <ul className={styles.list}>
          {resourceTypes.map((item, index) => (
            <li key={index}>
              <Link href={resourcesMap[item].route}>{resourcesMap[item].title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </nav>
);

export default SideMenu;
