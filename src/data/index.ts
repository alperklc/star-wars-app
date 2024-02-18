export const resourceTypes = ["films", "people", "planets", "species", "starships", "vehicles"] as const

export type ResourceType = typeof resourceTypes[number]

export type ResourceAttributes = {
    title: string;
    route: string;
    apiPath: string;
}

export const resourcesMap: Record<ResourceType, ResourceAttributes> = {
    "films": { title: "Films", route: "/films", apiPath: "/api/films" },
    "people": { title: "People", route: "/people", apiPath: "/api/people" },
    "planets": { title: "Planets", route: "/planets", apiPath: "/api/planets" },
    "species": { title: "Species", route: "/species", apiPath: "/api/species" },
    "starships": { title: "Starships", route: "/starships", apiPath: "/api/starships" },
    "vehicles": { title: "Vehicles", route: "/vehicles", apiPath: "/api/vehicles" },
}
