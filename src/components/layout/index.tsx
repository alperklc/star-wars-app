import React, { ReactNode } from "react";
import Header from "../header";
import SideMenu from "../side-menu";

import styles from "./index.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const [menuVisible, setVisibilityOfMenu] = React.useState<boolean>(false);
  const [backdropActive, setBackdropActive] = React.useState<boolean>(false);

  const toggleSideNav = () => setVisibilityOfMenu(!menuVisible);
  const toggleBackdrop = () => setBackdropActive(!backdropActive);

  return (
    <>
      <SideMenu visible={menuVisible} setVisibility={setVisibilityOfMenu} />

      {backdropActive && (
        <div className={styles.backdropOverlay} onClick={toggleBackdrop} />
      )}
      <div className={styles.layoutContainer}>
        <Header className={styles.header} onMenuIconClicked={toggleSideNav} />
        <div className={styles.pageContent}>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Layout;
