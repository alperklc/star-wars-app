import styles from "./index.module.css";

const ListItem = ({ item }: { item: any }) => {
  return (
    <article className={styles.entry}>
      <div className={styles.content}>
        <span className={styles.title}>{item.name}</span>
        <span className={styles.stars}>
          <span className={styles.starIcon} />
          {item.gender}
        </span>
      </div>
      <div className={styles.description}>{item.height }</div>
    </article>
  );
};

export default ListItem;
