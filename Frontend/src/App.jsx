
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Navbar from './components/shared/Navbar'
import Jobs from "./components/Jobs"
import Profile from "./components/profile"
import Browse from "./components/Browse"

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Signup',
    element: <Signup />
  },
  {
    path: '/Jobs',
    element: <Jobs />
  },
  {
    path: '/Browse',
    element: <Browse />
  },
  {
    path: '/profile',
    element: <Profile />
  }

])
function App() {
  return (
    <>
      <div>
        <RouterProvider router={appRouter} />
      </div>

    </>
  )
}

export default App
