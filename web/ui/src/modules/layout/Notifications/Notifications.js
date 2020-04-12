import React from 'react';
import { Popover, Intent, Icon } from '@blueprintjs/core';

const Notifications = () => {
  return <Popover>
    <Icon intent={Intent.PRIMARY} iconSize={20} icon="notifications-updated"/>
    <div>notifications</div>
  </Popover>;
};

export default Notifications;