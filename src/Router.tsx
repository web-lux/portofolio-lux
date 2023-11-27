import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import About from './pages/About.tsx'
import NotFound from './pages/NotFound.tsx'
import Project from './pages/Project.tsx'

function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <App />,
          errorElement: <NotFound />,
          children: [
            {
              index: true,
              element: <About />
            },
            {
              path: "/projects/:id", element: <Project />
            },
            {
              path: "/404",
              element: <NotFound />
            },
            {
              // handle user manually writing bad URL
              path: "*", 
              element: <NotFound />
            },
          ]
        }
    ])
    
    return <RouterProvider router={router} />
}

export default Router