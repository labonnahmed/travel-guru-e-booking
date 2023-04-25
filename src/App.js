import { createContext, useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import fakedata from './fakedata/fakedata.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';

export const mainContext= createContext();

function App() {
  const[places, setPlaces] = useState([]);
  const[authUser, setAuthUser] = useState(null);
  useEffect( () => setPlaces(fakedata), []);

  return (
    <mainContext.Provider value={[places, authUser, setAuthUser]}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/*' element={ <Home /> } />
        </Routes>
      </Router>
    </mainContext.Provider>
  );
}

export default App;
