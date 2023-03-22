import Brand from "./Brand";
import Dropdown from "./Dropdown";
import Menu from "./Menu";

export default function Header() {
  return (
    <nav className='navbar navbar-expand-sm bg-teal-300 shadow-md py-0 fixed-top'>
      <div className=' mx-1 flex'>
        <div className='flex-1'>
          <Brand />
        </div>
        <div className='flex-1'>
          <Menu />
        </div>
        <div className=' flex-1'>
          <Dropdown />
        </div>
      </div>
    </nav>
  );
}
