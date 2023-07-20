import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import { MyInfoProvider } from './contexts/myInfoContext';

import { Header } from './components/Header/Header';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { MyInformation } from './components/MyInformation/MyInformation';
import { Resume } from './components/ResumeTemplates/Resume/Resume';
import { Catalog } from './components/Catalog/Catalog';
import { SharedTemplate } from './components/SharedTemplate/SharedTemplate';

function App() {
  return (
    <AuthProvider>
      <MyInfoProvider>

        <div className='App'>
          <Header />

          <main>
            <Routes>

              <Route path='/' element={<Catalog />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/account/:userId' element={<MyInformation />} />
              <Route path='/templates' element={<Catalog />} />
              <Route path='/templates/:templateId' element={<Resume />} />
              <Route path='/:id' element={<SharedTemplate />} />

            </Routes>
          </main>

        </div>

      </MyInfoProvider>
    </AuthProvider>
  );
}

export default App;