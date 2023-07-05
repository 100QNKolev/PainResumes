import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';

import { Header } from './components/Header/Header';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <Header />

        <main>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />

          </Routes>
        </main>

      </div>
    </AuthProvider>
  );
}

export default App;
