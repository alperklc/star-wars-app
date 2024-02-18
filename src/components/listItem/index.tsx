import { ResourceType } from "../../data";
import { Film, Person, Planet, Resource, Species, Starship, Vehicle } from "../../data/types";
import styles from "./index.module.css";

const BaseListItem = ({ title, description, sideInfo }: { title: string, description: string, sideInfo: string }) => (
  <article className={styles.entry}>
    <div className={styles.content}>
      <span className={styles.title}>{title}</span>
      <span className={styles.rightSide}>{sideInfo}</span>
    </div>
    <div className={styles.description}>{description}</div>
  </article>
);

export const ListItem = ({ resourceType, item: initialItem }: { resourceType: ResourceType, item: Resource }) => {
  let item = initialItem
 
  switch (resourceType) {
    case "films":
      item = item as Film;
      return <BaseListItem title={item.title} description={item.producer} sideInfo={item.release_date} />
    case "people":
      item = item as Person
      return <BaseListItem title={item.name} description={item.birth_year} sideInfo={item.gender} />
    case "planets":
      item = item as Planet
      return <BaseListItem title={item.name} description={item.terrain} sideInfo={item.diameter} />
    case "species":
      item = item as Species
      return <BaseListItem title={item.name} description={item.classification} sideInfo={item.average_height} />
    case "starships":
      item = item as Starship
      return <BaseListItem title={item.name} description={item.manufacturer} sideInfo={item.crew} />
    case "vehicles":
      item = item as Vehicle
      return <BaseListItem title={item.name} description={item.manufacturer} sideInfo={item.vehicle_class} />
  }
}
