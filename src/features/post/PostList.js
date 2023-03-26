import Post from "./Post";

export default function PostList({ posts, setPosts }) {
  return (
    <div className='flex flex-col gap-3'>
      {posts.map(el => (
        <Post key={el.id} posts={el} setPosts={setPosts} />
      ))}
    </div>
  );
}
