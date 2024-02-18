import React from "react";
import SearchInput from "../../components/search";
import LoadingIndicator from "../../components/loadingIndicator";
import Layout from "../../components/layout";
import Pagination from "../../components/pagination";
import List from "../../components/list";
import { useData } from "../../data/hooks/useList";
import { Resource } from "../../data/types";
import { ResourceType, resourcesMap } from "../../data";

import styles from "./index.module.css";
import { ListItem } from "../../components/listItem";

const PAGE_SIZE = 10

function getPaginationRange(count: number, page: number): string {
  if (count === 0) {
    return "";
  }

  const from = (page - 1) * PAGE_SIZE + 1;
  const to = Math.min(page * PAGE_SIZE, count);

  return `${from} - ${to}`;
}

export function ListPage({ resourceType }: { resourceType: ResourceType }) {
  const { apiPath, title } = resourcesMap[resourceType]

  const [q, setQ] = React.useState("")
  const [page, setPage] = React.useState(1)
  const [data, loading, error] = useData<Resource>(apiPath, q, page);

  const maxPageNumber = Math.ceil(data.count / PAGE_SIZE)
  const goToPage = (page: number) => {
    if (page > 0) {
      setPage(page)
    }
  }
  const handleQueryUpdate = (newQuery: string) => {
    setPage(1)
    setQ(newQuery)
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h2>{data.count > 0 ? `${title} (${data.count})` : title}</h2>
        <section className={styles.top}>
          <SearchInput query={q} onQueryUpdate={handleQueryUpdate} />
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
            <List render={(item) => <ListItem resourceType={resourceType} item={item} />} items={data.results} />
          ) : (
            <span>Nothing found</span>
          )}

          <footer className={styles.footer}>
            <span>
              {maxPageNumber > 0 ? (
                <Pagination onPageClicked={goToPage} numberOfPages={maxPageNumber} currentPage={page} />
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
