import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage'
import Impact from './pages/Impact'
import GetInvolved from './pages/GetInvolved'
import Partners from './pages/Partners'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Donate from './pages/Donate'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'projects', element: <Projects /> },
        { path: 'projects/:slug', element: <ProjectPage /> },
        { path: 'impact', element: <Impact /> },
        { path: 'get-involved', element: <GetInvolved /> },
        { path: 'partners', element: <Partners /> },
        { path: 'shop', element: <Shop /> },
        { path: 'contact', element: <Contact /> },
        { path: 'donate', element: <Donate /> },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ],
  // Mirrors the Vite base so links resolve under /<repo-name>/ on Pages.
  { basename: import.meta.env.BASE_URL },
)
