import React from 'react';

import PapeerPlaneIcon from '../../../theme/icons/paper-plane-1.svg';
import { Popover, Icon } from '../../../theme/components';

const Chat: React.FC<{}> = () => {
  return (
    <Popover>
      <div><Icon icon={PapeerPlaneIcon} /></div>
      <div>chat is here</div>
    </Popover>
  );
};

export default Chat;
