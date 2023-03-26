import useAuth from "../../hooks/useAuth";
import * as postApi from "../../apis/post-api";
import { IconComment, IconLike } from "../../icons";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

export default function PostAction({
  posts: { Likes, id, Comments },
  setPosts
}) {
  const { authenticatedUser } = useAuth();

  const isUserLiked = Likes.find(
    el => el.userId === authenticatedUser.id
  );

  const handleClickLikeButton = async () => {
    if (isUserLiked) {
      await postApi.unlike(id);
      setPosts(previousPosts => {
        const deepClone = structuredClone(previousPosts);
        const idx = deepClone.findIndex(el => el.id === id);
        deepClone[idx].Likes = deepClone[idx].Likes.filter(
          el => el.userId !== authenticatedUser.id
        );
        return deepClone;
      });
    } else {
      const res = await postApi.createLike(id);
      setPosts(previousPosts => {
        const deepClone = structuredClone(previousPosts);
        const idx = deepClone.findIndex(el => el.id === id);
        deepClone[idx].Likes.push(res.data.like);
        return deepClone;
      });
    }
  };

  return (
    <>
      <div className='flex gap-1 py-1'>
        <button
          onClick={handleClickLikeButton}
          className={`btn ${
            isUserLiked ? "text-pink-400" : "text-gray-400"
          } flex-1 flex items-center justify-center gap-2 hover:bg-teal-300`}
        >
          <div
            className={`${
              isUserLiked ? "fill-pink-400" : "fill-white"
            }`}
          >
            <IconLike />
          </div>
          <small className='font-bold text-base'>
            Like
          </small>
        </button>
        <button className='btn text-gray-400 flex-1 flex items-center justify-center gap-2 hover:bg-teal-300'>
          <IconComment />
          <small className='font-bold text-base'>
            Comment
          </small>
        </button>
      </div>

      <hr className='border-black opacity-10 mx-5' />

      <div className='pb-2 px-3'>
        <div className='pt-1'>
          <small
            className='text-gray-400 hover:underline'
            role='button'
          >
            View {Comments.length} previous comments
          </small>
        </div>

        <div className='pt-2 flex flex-col gap-1'>
          <div className='flex gap-2'>
            <Link to='/'>
              <img
                src='https://images.unsplash.com/photo-1607408315636-9bbf355e7ff4'
                className='rounded-full w-10 h-10'
                alt='user'
              />
            </Link>

            <div className='flex flex-col'>
              <div className='lex items-center gap-1'>
                <div className='flex flex-col items-start py-2 px-3 bg-gray-200 rounded-2xl'>
                  <Link
                    to='/#'
                    className='text-black font-bold no-underline hover:underline text-base'
                  >
                    Takahiro Miki
                  </Link>
                  <small>Look so cute.</small>
                </div>
              </div>

              <span className='text-gray-400 ms-2 text-base'>
                2h
              </span>
            </div>
          </div>
        </div>

        <div className='flex pt-1 gap-2'>
          <Link to='/'>
            <Avatar
              src={authenticatedUser.profileImage}
              size='40'
            />
          </Link>
          <input
            className='form-control rounded-pill shadow-none border-0 h-9 text-3.5 bg-gray-200 focus:bg-gray-200 px-2'
            placeholder='Write a comment...'
          />
        </div>
      </div>
    </>
  );
}
