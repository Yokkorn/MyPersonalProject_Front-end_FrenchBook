import { IconLike } from "../../icons";

export default function PostResponse({
  posts: { Comments, Likes }
}) {
  return (
    <div className='flex py-2.5 px-3'>
      <div className='flex items-center grow space-x-1.5'>
        <div className='fill-pink-500 hover:fill-pink-400  relative w-4.5 h-4.5'>
          <IconLike />
        </div>
        {Likes.length > 0 && (
          <small className='text-gray-400'>
            {Likes.length} like{""}
            {Likes.length > 1 ? "s" : ""}
          </small>
        )}
      </div>
      {Comments.length > 0 && (
        <small
          className='text-gray-400 hover:underline mt-3'
          role='button'
        >
          {Comments.length} Comment
          {Comments.length > 1 ? "s" : ""}
        </small>
      )}
    </div>
  );
}
