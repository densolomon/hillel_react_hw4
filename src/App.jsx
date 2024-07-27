import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import MainPage from './pages/MainPage'
import UsersPage from './pages/UsersPage'
import UserInfoPage from './pages/UserInfoPage.jsx'
import UserAddress from './components/UserAddress/UserAddress.jsx'
import './style.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<MainPage/>} />
              <Route path="users" element={<UsersPage/> } />
              <Route path="users/:id" element={<UserInfoPage/>} >
                  <Route path="address" element={<UserAddress/>} />
              </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;