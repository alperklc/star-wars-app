import React from "react";
import { Resource } from "../../data/types";
import styles from "./index.module.css";

const List = ({ items, render }: { items: Resource[], render: (_: Resource) => React.ReactNode}) => {
  return (
    <ul className={styles.container}>
      {items.map((item, index) => (
        <li key={index}>
          {render(item)}
          </li>
      ))}
    </ul>
  );
};

export default List;
