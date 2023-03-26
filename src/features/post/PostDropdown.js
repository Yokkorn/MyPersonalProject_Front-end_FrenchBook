import * as postApi from "../../apis/post-api";
import { Link } from "react-router-dom";
import { MoreInfo } from "../../icons";
import { toast } from "react-toastify";

export default function PostDropdown({ posts, setPosts }) {
  const handleClickDelete = async () => {
    await postApi.deletePostById(posts.id);
    toast.success("Delete success");
    setPosts(previous =>
      previous.filter(el => el.id !== posts.id)
    );
  };

  return (
    <div className='dropdown'>
      <div className='flex justify-center'>
        <div>
          <div className='relative' data-te-dropdown-ref>
            <button
              className='hover:bg-teal-400 rounded-full mt-1'
              type='button'
              id='dropdownMenuButton1'
              data-te-dropdown-toggle-ref
              aria-expanded='false'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              <MoreInfo />
            </button>
            <ul
              className='absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-white [&[data-te-dropdown-show]]:block'
              aria-labelledby='dropdownMenuButton1'
              data-te-dropdown-menu-ref
            >
              <li>
                <Link
                  className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 hover:text-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-600 dark:hover:bg-neutral-500'
                  to='#'
                  data-te-dropdown-item-ref
                >
                  Edit
                </Link>
              </li>
              <li>
                <Link
                  className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 hover:text-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-600 dark:hover:bg-neutral-500'
                  to='#'
                  data-te-dropdown-item-ref
                  onClick={handleClickDelete}
                >
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
