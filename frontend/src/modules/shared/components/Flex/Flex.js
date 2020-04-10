import React from 'react';
import classNames from 'classnames';

import styles from './Flex.module.css';

export const JUSTIFY_CONTENT = Object.freeze({
  BETWEEN: 'between',
  AROUND: 'around',
  CENTER: 'center'
});

const Flex = ({ children, className, justifyContent=JUSTIFY_CONTENT.BETWEEN, ...props }) => {
  const flexClassName = classNames(styles.root, {
    [justifyContent]: true
  }, className);

  return <div className={flexClassName} {...props}>{children}</div>;
};

export default Flex;