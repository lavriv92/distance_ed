import React from 'react';
import { useToast } from '../../modules/toast/hooks';

const Home: React.FC<any> = () => {
  const toast = useToast();

  return <div onClick={() => toast.success('Success message')}>Home</div>;
};

export default Home;
