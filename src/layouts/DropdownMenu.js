import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

export default function DropdownMenu() {
  const { logout } = useAuth();
  return (
    <>
      <li>
        <Link
          className='flex gap-2 w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-orange-300 hover:text-orange-600 active:text-orange-500 hover:bg-neutral-200'
          to='/'
          data-te-dropdown-item-ref
        >
          <img
            src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='rounded-2xl cursor-pointer'
            width='100'
            height='100'
            alt='user'
          />
          <div className='flex flex-col justify-end'>
            <div className='text-black font-bold'>Yokkorn Tabutta</div>
            <small className='text-muted'>See your profile</small>
          </div>
        </Link>
      </li>
      <hr className='mx-2 h-0 border border-t-0 border-solid border-neutral-300  ' />
      <li>
        <button
          className='flex justify-center w-full whitespace-nowrap bg-transparent py-3 px-4  text-sm font-bold text-black hover:text-orange-600 active:text-orange-500 hover:bg-neutral-200'
          to='#'
          data-te-dropdown-item-ref
          onClick={logout}
        >
          Log out
        </button>
      </li>
    </>
  );
}
