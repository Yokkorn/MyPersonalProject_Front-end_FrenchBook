import { useLocation } from "react-router-dom";
import { IconFriend, IconHome } from "../icons";
import MenuItem from "./MenuItem";

const menuList = [
  { icon: <IconHome />, pathname: "/" },
  { icon: <IconFriend />, pathname: "/friend" },
];

export default function Menu() {
  const location = useLocation();
  return (
    <div className=''>
      <div className='flex gap-14 justify-center'>
        {menuList.map(el => (
          <MenuItem
            key={el.pathname}
            to={el.pathname}
            active={location.pathname === el.pathname}
          >
            {el.icon}
          </MenuItem>
        ))}
      </div>
    </div>
  );
}

// className='collapse content-center'
