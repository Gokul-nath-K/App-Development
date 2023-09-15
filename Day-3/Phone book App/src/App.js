import './Assets/CSS/App.css'
import Register from './Pages/Register';
import './Assets/CSS/App.css'
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import { userContext } from './Assets/Contexts/UserContext';
import { useState } from 'react';


function App() {

  const [user, setUser] = useState({});
  
  const contextValue = { user, setUser};

  return (
    <>
    <userContext.Provider value={contextValue} >
      <Routes>
          <Route exact path='/' element={<Register/>}/>
          <Route exact path='/home' element={<Home/>}/>
        </Routes>
    </userContext.Provider>
    </>
  );
}

export default App;
