import React , {Suspense, lazy} from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute';
import { LayoutLoader } from './components/layouts/Loaders';



// const  LayoutLoader = lazy(() => import ( './components/layouts/Loaders'));


const Home  = lazy(() => import('./pages/Home'));
const Login  = lazy(() => import('./pages/Login'));
const Chat  = lazy(() => import('./pages/Chat'));
const Group  = lazy(() => import('./pages/Group'));
const NotFound  = lazy (() =>import('./pages/NotFound'));


// Admin Routes

const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const DashBoard = lazy(() => import('./pages/admin/DashBoard'));
const ChatManagement = lazy(() => import('./pages/admin/ChatManagement'));
const MessageManageMent = lazy(() => import('./pages/admin/MessageManageMent'));
const UserManagement = lazy(() => import('./pages/admin/UserManagement'));



let user = true;




const App = () => {
  return <Router>
    <Suspense fallback={<LayoutLoader />} >


    <Routes>

      {/* Protected Route */}
      <Route element={<ProtectRoute user={user} />} >

    {/* Home */}
      <Route path = '/' element={<Home />} /> 
      <Route path = '/chat/:chatId' element={<Chat />} />
      <Route path = '/groups' element={<Group />} />

    </Route>



        {/* Protected Login */}
  <Route path = "/login" element={
    <ProtectRoute user={!user} redirect='/' >
      <Login />
    </ProtectRoute>


  } />

  <Route path='/admin' element={<AdminLogin />}  />
  <Route path='/admin/dashboard' element={<DashBoard />}  />
  <Route path='/admin/chats' element={<ChatManagement />}  />
  <Route path='/admin/users' element={<UserManagement />}  />
  <Route path='/admin/messages' element={<MessageManageMent />}  />




  {/* NOT Found */}
<Route path = '*' element={<NotFound />} />

</Routes>
    </Suspense>
  </Router>
}

export default App
