import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Flex.module.css';

export enum JustifyContent {
  BETWEEN = 'between',
  AROUND = 'around',
  CENTER = 'center',
}

const Flex: FC<any> = ({ children, className, justifyContent = JustifyContent.BETWEEN, ...props }) => {
  const flexClassName = classNames(
    styles.root,
    {
      [justifyContent]: true,
    },
    className,
  );

  return (
    <div className={flexClassName} {...props}>
      {children}
    </div>
  );
};

export default Flex;
