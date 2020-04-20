import React from 'react';

import styles from './styles.module.css';

type BaseLayoutProps = {
  sidebar: React.ReactNode,
  main: React.ReactNode,
  header: React.ReactNode,
  footer: React.ReactNode
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ sidebar, main, header, footer }) => {
  return <div className={styles.root}>
    <header>{header}</header>
    <main className={styles.body}>
      <div className={styles.sidebar}>{sidebar}</div>
      <div className={styles.main}>{main}</div>
    </main>
    <footer>{footer}</footer>
  </div>
}

export default BaseLayout;