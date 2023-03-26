import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Avatar from "../../components/Avatar";
import Modal from "../../components/Modal";
import PostForm from "./PostForm";

export default function PostCreateToggle() {
  const {
    authenticatedUser: { id, profileImage, firstName }
  } = useAuth();

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=' bg-teal-200 shadow-md px-3 rounded-lg py-3'>
        <div className='flex gap-2'>
          <Link to={`/profile/${id}`}>
            <Avatar src={profileImage} size='50' />
          </Link>
          <button
            className='btn pl-5 rounded-full text-gray-400 flex-1 bg-white text-left hover:ring-4 ring-neutral-300'
            onClick={() => setOpen(true)}
          >
            What's on your mind, {firstName}?
          </button>
        </div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title='Post'
        >
          <PostForm onSuccess={() => setOpen(false)} />
        </Modal>
      </div>
    </>
  );
}
