import { Link } from "react-router-dom";
import { Logo } from "../icons";

export default function Brand() {
  return (
    <div className='p-2'>
      <Link to='/'>
        <Logo />
      </Link>
    </div>
  );
}
