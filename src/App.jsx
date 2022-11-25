import './style/style.scss';

import { Routes, Route, Navigate } from 'react-router-dom';

import DefaultHeader from './components/Default/DefaultHeader/DefaultHeader';
import DefaultFooter from './components/Default/DefaultFooter/DefaultFooter';

import Home from './pages/Home/Home';
import Error404 from './pages/Error404/Error404';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';

function App() {
  return (
    <div className="app">
      <DefaultHeader />
      <main>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home" element={<Navigate to="/" />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="user" element={<User />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </main>
      <DefaultFooter />
    </div>
  );
}

export default App;
