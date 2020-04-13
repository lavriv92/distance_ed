import React from 'react';

import styles from './styles.module.scss';

const Sidebar = ({ children }) => <div className={styles.root}>
  <div className={styles.wrapper}>{children}</div>
</div>;

export default Sidebar;