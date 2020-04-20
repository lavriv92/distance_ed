import React from 'react';

import styles from './styles.module.scss';

const SideContainer: React.FC<any> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default SideContainer;
