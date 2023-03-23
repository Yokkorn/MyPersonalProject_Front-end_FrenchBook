import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";

export default function DropdownMenu() {
  const { logout, authenticatedUser } = useAuth();
  return (
    <>
      <li>
        <Link
          className='flex gap-2 w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-black hover:text-teal-500 active:text-teal-600 hover:bg-neutral-200'
          to='/'
          data-te-dropdown-item-ref
        >
          <Avatar src={authenticatedUser.profileImage} size='90' />
          <div className='flex flex-col justify-center'>
            <div className='text-black font-bold text-base'>
              {authenticatedUser.firstName} {authenticatedUser.lastName}
            </div>
            <small className='text-muted'>See your profile</small>
          </div>
        </Link>
      </li>
      <hr className='mx-2 h-0 border border-t-0 border-solid border-neutral-300  ' />
      <li>
        <button
          className='flex justify-center w-full whitespace-nowrap bg-transparent py-3 px-4  text-sm font-bold text-black hover:text-teal-500 active:text-teal-600 hover:bg-neutral-200'
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
