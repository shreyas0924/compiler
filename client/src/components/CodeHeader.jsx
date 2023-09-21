import { Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

const CodeHeader = () => {
  const { isSignedIn } = useUser()
  return (
    <div className='flex justify-between items-center mx-auto  w-11/12  py-3 '>
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
      <div>{isSignedIn && <UserButton />}</div>
    </div>
  )
}

export default CodeHeader
