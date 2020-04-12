import React, { useEffect } from 'react';
import api from '../../modules/shared/utils/api';

const Home = () => {
  
  useEffect(() => {
    api.get('/v1/')
      .then(res => {
        console.log('res', res)
      })
  }, [])
  
  return <div>Home</div>
};

export default Home;