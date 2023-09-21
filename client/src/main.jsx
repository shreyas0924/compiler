import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { dark } from '@clerk/themes'
import CodeEditor from './components/CodeEditor'
import Home from './pages/Home'
import {
  ClerkProvider,
  RedirectToSignIn,
  // SignedIn,
  // SignedOut,
  // UserButton,
  // useUser,
  // RedirectToSignIn,
} from '@clerk/clerk-react'
import ContactPage from './pages/Contact'

if (!import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY) {
  throw 'Missing Publishable Key'
}

const clerkPubKey = import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/editor',
    element: <CodeEditor />,
  },
  {
    path: '/sign-in',
    element: <RedirectToSignIn />,
  },
  {
    path: '/sign-out',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={clerkPubKey}
      appearance={{
        baseTheme: dark,
      }}
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
)
