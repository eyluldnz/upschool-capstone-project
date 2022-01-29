import React, { useContext } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/pages/ProtectRoute';
import Home from './components/pages/publicPage/Home';
import LoginPage from './components/pages/loginPage/LoginPage';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './components/pages/publicPage/UserProfile';
import { useSelector } from 'react-redux';
import MovieDetail from './components/pages/publicPage/MovieDetail';
import NavBar from './components/pages/publicPage/baseComponent/NavBar';
import SortFilterPage from './components/pages/publicPage/movieFilter/SortFilterPage';
import { ThemeProvider } from 'styled-components';
import { ThemeContext, ThemeContextProvider } from './contexts/ThemeContext';
import { styledTheme } from './components/styledComponents/styledTheme'

function App() {

  const state = useSelector(state => state.authentication);

  const { themeName } = useContext(ThemeContext);

  return (
    <div className="App">
     

      
      <ThemeProvider theme={styledTheme[themeName]}>

     
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />


        <Route
          path="/profile"
          element={
            <ProtectRoute auth={state.isLoading}>
              <UserProfile />
            </ProtectRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectRoute auth={state.isLoading}>
              <Home />
            </ProtectRoute>
          }
        />
        <Route
          path="/movie/:movieId"
          element={
            <ProtectRoute auth={state.isLoading}>
              <MovieDetail />
            </ProtectRoute>
          }
        />
         <Route
          path="/popular"
          element={
            <ProtectRoute auth={state.isLoading}>
              <SortFilterPage />
            </ProtectRoute>
          }
        />
         <Route
          path="/top_rated"
          element={
            <ProtectRoute auth={state.isLoading}>
              <SortFilterPage />
            </ProtectRoute>
          }
        />

      </Routes>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
