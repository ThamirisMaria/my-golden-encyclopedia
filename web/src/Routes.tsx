import { Routes, Route } from 'react-router-dom';
import {HomePage} from './pages/Home';
import {NewGoldListPage} from './pages/GoldLists/newGoldList';
import {DefaultLayout} from './layouts/DefaultLayout';
import {OpenGoldList} from './pages/GoldLists/openGoldList';
import {LoginPage} from './pages/Login/login';
import { SingUp } from './pages/singUp/singUp';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SingUp />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/goldlist' element={<OpenGoldList />} />
        <Route path='/newgoldlist' element={<NewGoldListPage />} />
      </Route>
    </Routes>
  );
}
