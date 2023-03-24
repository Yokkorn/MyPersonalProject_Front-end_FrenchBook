import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function AvatarGroup({
  max,
  data,
  size,
  borderSize,
  borderColor,
}) {
  return (
    <div className='flex'>
      {data.slice(0, max).map((el, idx) => (
        <Link to={`/profile/${el.id}`} key={el.id}>
          <span className='flex -mr-2'>
            <Avatar
              src={el.profileImage}
              size={size}
              borderSize={borderSize}
              borderColor={borderColor}
              className='inline-block h-10 w-10 rounded-full ring-2 ring-white'
            />
          </span>
        </Link>
      ))}
    </div>
  );
}
