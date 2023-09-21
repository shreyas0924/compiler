import { useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import { UserButton } from '@clerk/clerk-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Code2 } from 'lucide-react'

const Header = () => {
  const notify = () => toast.info('Please sign in to access the editor.')
  const { isSignedIn } = useUser()
  return (
    <div>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-2'>
        Welcome to Tequed Labs Code Editor.
      </div>

      <div className='flex justify-between items-center mx-auto mt-5 w-11/12 text-white py-5 '>
        <div className='flex items-center'>
          <Link
            className='flex gap-3 items-center text-2xl font-bold text-gray-400'
            to='/'
          >
            <div className='mt-1'>
              <Code2 />
            </div>
            <div>Tequed Editor</div>
          </Link>
        </div>

        <div className='space-x-4 flex'>
          {isSignedIn ? (
            <Link
              to='/editor'
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
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  )
}

export default Header
