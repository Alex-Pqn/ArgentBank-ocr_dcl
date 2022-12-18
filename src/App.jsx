import './style/style.scss';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DefaultHeader from './components/Default/DefaultHeader/DefaultHeader';
import DefaultFooter from './components/Default/DefaultFooter/DefaultFooter';

import Home from './pages/Home/Home';
import Error404 from './pages/Error404/Error404';
import Login from './pages/Login/Login';
import UserProfile from './pages/User/UserProfile/UserProfile';

function App() {
  return (
    <div className="app">
      <DefaultHeader />
      <main>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home" element={<Navigate to="/" />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </main>
      <DefaultFooter />
    </div>
  );
}

export default App;
