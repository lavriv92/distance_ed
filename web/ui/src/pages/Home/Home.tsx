import React from 'react';
import { useToast } from '../../modules/toast/hooks';

const Home: React.FC<any> = () => {
  const toast = useToast();

  return <div>
    <div onClick={() => toast.success('Success message')}>Success</div>
    <div onClick={() => toast.info('Info message')}>Info</div>
    <div onClick={() => toast.warning('Warning message')}>Warning</div>
    <div onClick={() => toast.danger('Danger message')}>Danger</div>
  </div>;
};

export default Home;
