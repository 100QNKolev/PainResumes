import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import { MyInfoProvider } from './contexts/myInfoContext';
import { ResumeProvider } from './contexts/resumeContext';

import { Header } from './components/Header/Header';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { MyInformation } from './components/MyInformation/MyInformation';
import { Resume } from './components/ResumeTemplates/Resume/Resume';
import { Catalog } from './components/Catalog/Catalog';

function App() {
  return (
    <AuthProvider>
      <MyInfoProvider>
        <ResumeProvider>

          <div className='App'>
            <Header />

            <main>
              <Routes>

                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/account/:userId' element={<MyInformation />} />
                <Route path='/templates' element={<Catalog />} />
                <Route path='/templates/1' element={<Resume />} />

              </Routes>
            </main>

          </div>

        </ResumeProvider>
      </MyInfoProvider>
    </AuthProvider>
  );
}

export default App;
