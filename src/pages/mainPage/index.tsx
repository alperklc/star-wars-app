import { Link } from "wouter";
import Layout from "../../components/layout";
import { resourceTypes, resourcesMap } from "../../data";
import styles from "./index.module.css";

export function MainPage() {
    return (
        <Layout>
            <ul className={styles.list}>
                {resourceTypes.map((item, index) => (
                    <li key={index}>
                        <Link href={resourcesMap[item].route}>{resourcesMap[item].title}</Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}
