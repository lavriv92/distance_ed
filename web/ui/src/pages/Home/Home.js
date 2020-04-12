import React, { useEffect } from 'react';

const Home = () => {
  
  useEffect(() => {
    fetch('/v1/')
      .then(res => res.json())
      .then(res => {
        console.log('res', res)
      })
  }, [])
  
  return <div>Home</div>
};

export default Home;