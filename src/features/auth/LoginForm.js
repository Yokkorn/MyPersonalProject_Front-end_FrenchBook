export default function LoginForm() {
  return (
    <>
      <form className='w-[500px] flex flex-col items-center bg-slate-50 rounded-3xl pt-12 drop-shadow-lg'>
        <div className='w-3/4 mb-6'>
          <input
            type='text'
            className='w-full py-4 px-4 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300'
            placeholder='Email or Mobile'
            name='email'
            // value={email}
          />
        </div>

        <div className='w-3/4 mb-6'>
          <input
            type='password'
            className='w-full py-4 px-4 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500  border-solid border-2 border-slate-300'
            placeholder='Password'
            name='password'
            // value={password}
          />
        </div>
        <div className='w-3/4 mb-12'>
          <button
            type='submit'
            className='py-4 bg-teal-300 hover:bg-teal-500 w-full text-white font-bold  border-b-2 border-teal-500 hover:border-teal-300 focus:ring-4 focus:ring-teal-300 rounded'
          >
            LOGIN
          </button>
        </div>
      </form>
    </>
  );
}
