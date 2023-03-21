export default function Spinner() {
  return (
    <>
      <div className='fixed top-[50vh] left-[50vw]  flex items-center justify-center z-20'>
        <div
          className='inline-block  h-16 w-16 animate-spin rounded-full border-8 border-solid border-neutral-600 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
          role='status'
        ></div>
      </div>
      <div className='fixed top-0 left-0 w-full h-full bg-black opacity-40 z-10'></div>
    </>
  );
}
