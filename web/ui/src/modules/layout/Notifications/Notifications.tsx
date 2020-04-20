import React from 'react';


import { Popover, Icon } from '../../../theme/components';
import NotificationIcon from '../../../theme/icons/notification.svg';

const Notifications: React.FC<{}> = () => {
  return (
    <Popover>
      <Icon icon={NotificationIcon}/>
      <div>notifications</div>
    </Popover>
  );
};

export default Notifications;
