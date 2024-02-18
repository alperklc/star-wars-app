import { Link } from "wouter";
import Layout from "../../components/layout";
import styles from "./index.module.css";
import { resources } from "../../data";

export function MainPage() {

    return (
        <Layout>
            <ul className={styles.list}>
                {resources.map((item, index) => (
                    <li key={index}>
                        <Link href={item.route}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}