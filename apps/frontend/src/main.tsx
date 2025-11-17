import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import petsPage from './pages/pets.tsx'
import axios from 'axios'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/pets",
    Component: petsPage,
    loader: async () => {
      const pets = await axios.get("/api/pets");

      return { pets: pets.data }
    }
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
