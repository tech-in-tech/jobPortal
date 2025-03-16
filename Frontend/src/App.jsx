
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Navbar from './components/shared/Navbar'

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
