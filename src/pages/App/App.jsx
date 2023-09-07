import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NewSearchPage from '../NewSearchPage/NewSearchPage';
import AuthPage from '../AuthPage/AuthPage';
import SearchHistoryPage from '../SearchHistoryPage/SearchHistoryPage';
import NavBar from '../../components/NavBar/NavBar';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {/* is user truthy */}
        { user ? 
          <>
            <NavBar user={user} setUser={setUser}/>
            <Routes>
              {/* Route components in here */}
              {/* Routes component will render the most appropriate match */}
              <Route path="/search/new/" element={<NewSearchPage />}/>
              <Route path="/history" element={<SearchHistoryPage />}/>
            </Routes>
          </>
              :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

