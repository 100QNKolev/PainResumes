import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';

import { Header } from './components/Header/Header';
import { Register } from './components/Register/Register';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <Header />

        <main>
          <Routes>
            <Route path='/register' element={<Register />} />
          </Routes>
        </main>

      </div>
    </AuthProvider>
  );
}

export default App;
