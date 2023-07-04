import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';

import { Header } from './components/Header/Header';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <Header />

        <main>

        </main>

      </div>
    </AuthProvider>
  );
}

export default App;
