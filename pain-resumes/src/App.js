import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import { MyInfoProvider } from './contexts/myInfoContext';

import { Header } from './components/Header/Header';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { MyInformation } from './components/MyInformation/MyInformation';

function App() {
  return (
    <AuthProvider>
      <MyInfoProvider>
        <div className='App'>
          <Header />
          
          <main>
            <Routes>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/account/:userId' element={<MyInformation />} />
            </Routes>
          </main>

        </div>
      </MyInfoProvider>
    </AuthProvider>
  );
}

export default App;
