import type { Film } from "./Film";
import type { Person } from "./People";
import type { Planet } from "./Planet";
import type { Species } from "./Species";
import type { Starship } from "./Starship";
import type { Vehicle } from "./Vehicle";

export type Resource = Film | Person | Planet | Species | Starship | Vehicle;
export { Film, Person, Planet, Species, Starship, Vehicle }
