import { Container } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// pages and components
import Login from './pages/Login/Login';
import Signup from './pages/Register/Signup';
import Profile from './pages/Profile/Profile';
import Dashboard from './pages/Notes/Dashboard';
import { useAuthContext } from './hooks/useAuthContext';

const App = () => {
  const { user, authIsReady } = useAuthContext();

  return (
    <Router>
      {authIsReady && (
        <>
          <Header />
          <Container sx={{ mt: 3 }}>
            <Routes>
              <Route path='/' element={<Navigate to='/notes' />} />
              <Route path='/:site' element={<Navigate to='/notes' />} />
              <Route
                path='/notes'
                element={user ? <Dashboard /> : <Navigate to='/login' />}
              />
              <Route
                path='/signup'
                element={user ? <Navigate to='/' /> : <Signup />}
              />
              <Route
                path='/login'
                element={user ? <Navigate to='/' /> : <Login />}
              />
              <Route
                path='/profile'
                element={user ? <Profile /> : <Navigate to='/login' />}
              />
            </Routes>
          </Container>
        </>
      )}
    </Router>
  );
};

export default App;
