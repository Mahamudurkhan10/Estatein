import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { router } from './Router/Router';
import AuthProvider from './Components/Provider/AuthProvider';

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
      
          <RouterProvider router={router} />
       
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
