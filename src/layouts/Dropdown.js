import DropdownMenu from "./DropdownMenu";
import DropdownToggle from "./DropdownToggle";

export default function Dropdown() {
  return (
    <>
      <div className='mr-2 mt-2 flex justify-end gap-2'>
        <div className='flex justify-center'>
          <div>
            <div className='relative' data-te-dropdown-ref>
              <button
                type='button'
                id='dropdownMenuButton1d'
                data-te-dropdown-toggle-ref
                aria-expanded='false'
                data-te-ripple-init
                data-te-ripple-color='light'
              >
                <DropdownToggle />
              </button>
              <ul
                className='absolute z-[1000] float-left m-0 hidden  min-w-max list-none overflow-hidden rounded-lg border-none bg-white  bg-clip-padding text-left text-base shadow-lg [&[data-te-dropdown-show]]:block'
                aria-labelledby='dropdownMenuButton1d'
                data-te-dropdown-menu-ref
              >
                <DropdownMenu />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
