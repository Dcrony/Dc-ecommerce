import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ShopContextProvider from './contexts/ShopContext.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <ShopContextProvider>
    <App/>
  </ShopContextProvider>
  </AuthProvider>
)
