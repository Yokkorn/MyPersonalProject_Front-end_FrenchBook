import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { timeSince } from "../../utils/date-format";

export default function PostAuthor({
  posts: {
    User: { id, firstName, lastName, profileImage },
    createdAt
  }
}) {
  return (
    <div className='flex items-center gap-2'>
      <div>
        <Link to={`/profile/${id}`}>
          <Avatar size='40' src={profileImage} />
        </Link>
      </div>
      <div className='flex flex-col mb-2'>
        <Link
          to={`/profile/${id}`}
          className='text-dark font-bold no-underline hover:underline text-3.5'
        >
          {firstName} {lastName}
        </Link>
        <small className='text-gray-400 text-3'>
          {timeSince(createdAt)}
        </small>
      </div>
    </div>
  );
}
