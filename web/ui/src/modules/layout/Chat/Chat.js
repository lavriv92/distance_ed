import React from 'react';
import { Popover, Icon, Intent } from '@blueprintjs/core';

import styles from './Chat.module.css';

const Chat = () => {
  return <Popover className={styles.root}>
  <Icon intent={Intent.PRIMARY} iconSize={20} icon="chat" />
  <div>chat here</div>
</Popover>
};

export default Chat;