import { useEffect, useState } from "react";
import PostCreateToggle from "./PostCreateToggle";
import PostList from "./PostList";
import * as postApi from "../../apis/post-api";

export default function PostContainer() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await postApi.getAllPostIncFriend();
      setPosts(res.data.posts);
    };
    fetchPost();
  }, []);

  return (
    <>
      <div className=' w-[100vw] h-[100vh]'>
        <div className='m-auto w-[55%] py-4 max-w-152'>
          <div className='mx-2 flex flex-col gap-3'>
            <PostCreateToggle />
            <PostList posts={posts} setPosts={setPosts} />
          </div>
        </div>
      </div>
    </>
  );
}
