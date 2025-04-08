
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Navbar from './components/shared/Navbar'
import Jobs from "./components/Jobs"
import Profile from "./components/profile"
import Browse from "./components/Browse"
import JobDescription from "./components/JobDescription"
import Companies from "./components/admin/Companies"
import CompanyCreate from "./components/admin/CompanyCreate"
import CompanySetup from "./components/admin/CompanySetup"
import AdminJobs from "./components/admin/AdminJobs"

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
  },
  {
    path: '/description/:id',
    element: <JobDescription />
  },

  // admin
  {
    path:"/admin/companies",
    element:<Companies/>
  },
  {
    path:"/admin/companies/create",
    element:<CompanyCreate/>
  },
  {
    path:"/admin/companies/:id",
    element:<CompanySetup/>
  },
  {
    path:"/admin/jobs",
    element:<AdminJobs/>
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
