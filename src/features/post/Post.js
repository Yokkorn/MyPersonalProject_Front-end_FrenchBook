import useAuth from "../../hooks/useAuth";
import PostAction from "./PostAction";
import PostAuthor from "./PostAuthor";
import PostContent from "./PostContent";
import PostDropdown from "./PostDropdown";
import PostResponse from "./PostResponse";
// import PostResponse from "./PostResponse";

export default function Post({ posts, setPosts }) {
  const { authenticatedUser } = useAuth();
  return (
    <div className=' bg-teal-200 shadow-md  rounded-lg pt-3'>
      <div className='flex justify-between px-3'>
        <PostAuthor posts={posts} />
        {posts.User.id === authenticatedUser.id && (
          <PostDropdown posts={posts} setPosts={setPosts} />
        )}
      </div>
      <hr className='border-black opacity-10 mx-5' />
      <PostContent posts={posts} />
      <PostResponse posts={posts} />
      <hr className='border-black opacity-10 mx-5' />
      <PostAction posts={posts} setPosts={setPosts} />
    </div>
  );
}
