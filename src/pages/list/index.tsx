import React from "react";
import SearchInput from "../../components/search";
import { useData } from "../../data/hooks/useList";

import styles from "./index.module.css";
import { Film } from "../../data/types/Film";
import { Person } from "../../data/types/People";
import { Planet } from "../../data/types/Planet";
import { Species } from "../../data/types/Species";
import { Starship } from "../../data/types/Starship";
import { Vehicle } from "../../data/types/Vehicle";
import LoadingIndicator from "../../components/loadingIndicator";
import ListItem from "../../components/listItem";
import Layout from "../../components/layout";
import Pagination from "../../components/pagination";

const PAGE_SIZE = 10

function getPaginationRange(count: number, page: number): string {
  if (count === 0) {
    return "";
  }

  const from: number = (page - 1) * PAGE_SIZE + 1;
  const to: number = Math.min(page * PAGE_SIZE, count);

  return `${from} - ${to}`;
}

export function ListPage<T>({ apiPath, title }: { apiPath: string, title: string }) {
  const [q, setQ] = React.useState("")
  const [page, setPage] = React.useState(1)
  const [data, loading, error] = useData<T>(apiPath, q, page);

  const maxPageNumber = Math.ceil(data.count / PAGE_SIZE)
  const goToPage = (page: number) => {
    if (page > 0) {
      setPage(page)
    }
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h2>{data.count > 0 ? `${title} (${data.count})` : title}</h2>
        <section className={styles.top}>
          <SearchInput query={q} onQueryUpdate={setQ} />
          {data?.count ? (
            <span className={styles.count}>{getPaginationRange(data.count, page)}</span>
          ) : (
            <span />  
          )}
        </section>
        <div>
          {loading ? (
            <LoadingIndicator />
          ) : data?.results.length > 0 ? (
            <ul className={styles.list}>
              {data.results.map((item, index) => (
                <li key={index}>
                  <ListItem item={item} />
                </li>
              ))}
            </ul>
          ) : (
            <span>Nothing found</span>
          )}

          <footer className={styles.footer}>
            <span>
              {maxPageNumber > 0 ? (
                <Pagination
                  onPageClicked={goToPage}
                  numberOfPages={maxPageNumber}
                  currentPage={page}
                />
              ) : (
                <span>&nbsp;</span>
              )}
            </span>
          </footer>
        </div>
      </div>
    </Layout>

  );
};

export function getListPage(path: string) {
  switch (path) {
    case "films":
      return () => <ListPage<Film> apiPath={path} title="Films" />
    case "people":
      return () => <ListPage<Person> apiPath={path} title="People" />
    case "planets":
      return () => <ListPage<Planet> apiPath={path} title="Planets" />
    case "species":
      return () => <ListPage<Species> apiPath={path} title="Species" />
    case "starships":
      return () => <ListPage<Starship> apiPath={path} title="Starships" />
    case "vehicles":
      return () => <ListPage<Vehicle> apiPath={path} title="Vehicles" />
  }
}