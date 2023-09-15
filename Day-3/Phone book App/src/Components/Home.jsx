import React, { useContext } from 'react'
import { userContext } from '../Assets/Contexts/UserContext';

const Home = () => {

  const { user } = useContext(userContext);

  return (
    <h1 style={{color : 'white', paddingTop : '300px', paddingLeft : '650px'}}>You'r in, {user.email}</h1>
  )
}

export default Home