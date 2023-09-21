import './Assets/CSS/App.css'
import Register from './Pages/Register';
import './Assets/CSS/App.css'
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import ContactArea from './Components/ContactArea';
import SearchPage from './Pages/SearchPage';
import AddContact from './Pages/AddContact';
import EditContact from './Pages/EditContact';
import GroupContact from './Pages/GroupContact';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route path='home' element={<Home />} >
          <Route index element={<ContactArea/>} />
          <Route path='search' element={<SearchPage/>} />
          <Route path='addcontact' element={<AddContact/>} />
          <Route path='editcontact' element={<EditContact/>} />
          <Route path='groupcontact' element={<GroupContact/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
