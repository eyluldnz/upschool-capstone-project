import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/pages/ProtectRoute';
import Home from './components/pages/publicPage/Home';
import LoginPage from './components/pages/loginPage/LoginPage';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './components/pages/publicPage/UserProfile';
import {useSelector} from 'react-redux';

function App() {

  const state=useSelector(state=>state.authentication);

    console.log(state);

  return (
    <div className="App">

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

      </Routes>

    </div>
  );
}

export default App;
