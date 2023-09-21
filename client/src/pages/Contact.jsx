import Header from '../components/Header'

const ContactPage = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Header />

      <div className='container mx-auto py-10 border-2 border-white rounded-2xl mt-5 '>
        <div className='max-w-3xl mx-auto p-3  rounded-lg shadow-lg'>
          <h2 className='text-3xl font-semibold mb-6'>Contact Us</h2>
          <form>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-lg font-medium'>
                Your Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full py-2 px-3 border rounded-lg'
                placeholder='Name'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-lg font-medium'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full py-2 px-3 border rounded-lg'
                placeholder='Email'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block text-lg font-medium'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows='5'
                className='w-full py-2 px-3 border rounded-lg'
                placeholder='Your message here...'
              ></textarea>
            </div>
            <div className='flex justify-end'>
              <button
                type='submit'
                className='bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
