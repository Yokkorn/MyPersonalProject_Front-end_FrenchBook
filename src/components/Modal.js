import { CloseButton } from "../icons";

export default function Modal({ open, onClose, children, title }) {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full z-30 transition-transform duration-500 ${
          open ? "scale-100" : "scale-0"
        }`}
        onMouseDown={onClose}
        //  onMouseDown={onClose}
      >
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-30  '>
          <div
            className='fixed w-1/3 md:w-7/12 lg:w-1/3 bg-teal-50 rounded-2xl shadow-lg p-4  flex flex-col items-center justify-center '
            onMouseDown={e => e.stopPropagation()}
          >
            <div className='w-[100%] flex justify-center gap-x-44 '>
              <button type='submit' className='invisible' onClick={onClose}>
                <CloseButton />
              </button>
              <div className='text-2xl text-center font-bold w-[200px]'>
                {title}
              </div>
              <button
                type='submit'
                className='flex justify-end'
                onClick={onClose}
              >
                <CloseButton />
              </button>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
      {open && (
        <div className='fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10' />
      )}
    </>
  );
}
