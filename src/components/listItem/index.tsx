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

export const ListItem = ({ resourceType, item }: { resourceType: ResourceType, item: Resource }) => {
  switch (resourceType) {
    case "films":
      const film = item as Film;
      return <BaseListItem title={film.title} description={film.producer} sideInfo={film.release_date} />
    case "people":
      const person = item as Person
      return <BaseListItem title={person.name} description={person.birth_year} sideInfo={person.gender} />
    case "planets":
      const planet = item as Planet
      return <BaseListItem title={planet.name} description={planet.terrain} sideInfo={planet.diameter} />
    case "species":
      const species = item as Species
      return <BaseListItem title={species.name} description={species.classification} sideInfo={species.average_height} />
    case "starships":
      const starship = item as Starship
      return <BaseListItem title={starship.name} description={starship.manufacturer} sideInfo={starship.crew} />
    case "vehicles":
      const vehicle = item as Vehicle
      return <BaseListItem title={vehicle.name} description={vehicle.manufacturer} sideInfo={vehicle.vehicle_class} />
  }
}
