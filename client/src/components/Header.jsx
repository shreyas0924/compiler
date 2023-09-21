import { useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import { UserButton } from '@clerk/clerk-react'
import toast, { Toaster } from 'react-hot-toast'
const notify = () => toast('Please sign in to access the editor.')
const Header = () => {
  const { isSignedIn } = useUser()
  return (
    <div>
      <div className='bg-purple-600 text-white text-center py-2'>
        Welcome to Tequed Labs Code Editor.
      </div>

      <div className='flex justify-between items-center mx-auto mt-5 w-11/12 text-white py-5 '>
        <div className='flex items-center'>
          <Link className='text-2xl font-bold text-gray-400' to='/'>
            Tequed Editor
          </Link>
        </div>

        <div className='space-x-4 flex'>
          {isSignedIn ? (
            <Link
              to='/editor'
              target='blank'
              className='text-lg text-gray-400 hover:text-white hover:underline'
            >
              Editor
            </Link>
          ) : (
            <div
              className='text-lg text-gray-400 hover:text-white hover:underline cursor-pointer'
              onClick={notify}
            >
              Editor
            </div>
          )}

          <Link
            className='text-lg text-gray-400 hover:text-white hover:underline'
            to='/contact'
          >
            Contact
          </Link>
          <div>
            {!isSignedIn ? (
              <Link
                to='/sign-in'
                className='text-lg text-gray-400 hover:text-white hover:underline'
              >
                Sign In
              </Link>
            ) : (
              <UserButton />
            )}
          </div>
        </div>
      </div>
      <Toaster
        position='bottom-right'
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 2500,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
          },
        }}
      />
    </div>
  )
}

export default Header
