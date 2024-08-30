import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing'
import Onboarding from './pages/onboarding'
import SaveJobs from './pages/saved-jobs'
import JobPage from './pages/job'
import JobListing from './pages/job-listing'
import MyJobs from './pages/my-jobs'
import { ThemeProvider } from './components/theme-provider'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element: <Onboarding />
      },
      {
        path: '/saved-jobs',
        element: <SaveJobs />
      },
      {
        path: '/job/:id',
        element: <JobPage />
      },
      {
        path: '/jobs',
        element: <JobListing />
      },
      {
        path: '/my-jobs',
        element: <MyJobs />
      }
    ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
