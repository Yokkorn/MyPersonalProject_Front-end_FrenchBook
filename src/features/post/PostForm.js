import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useLoading from "../../hooks/useLoading";
import useClickFileInput from "../../hooks/useClickFileInput";
import * as postApi from "../../apis/post-api";
import { AddPhoto, CloseButton } from "../../icons";

export default function PostForm({ onSuccess }) {
  const [title, setTitle] = useState("");
  const { startLoading, stopLoading } = useLoading();

  const {
    file,
    ref,
    openFileInput,
    onChangeFileInput,
    onCancel,
  } = useClickFileInput();

  const {
    authenticatedUser: { firstName },
  } = useAuth();

  const handleSubmitForm = async e => {
    startLoading();
    e.preventDefault();
    const formData = new FormData();
    if (title) {
      formData.append("title", title);
    }
    if (file) {
      formData.append("postImage", file);
    }
    await postApi.createPost(formData);
    setTitle("");
    onCancel();
    onSuccess();
    stopLoading();
  };

  return (
    <form
      className='flex flex-col w-[530px] items-center mt-3'
      onSubmit={handleSubmitForm}
    >
      <textarea
        className='form-textarea border-0 shadow-none w-[100%] pt-2 pl-3'
        placeholder={`What's on your mind, ${firstName}?`}
        rows='10'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <div
        className='relative w-[100%]'
        role='button'
        onClick={openFileInput}
      >
        {file ? (
          <>
            <button
              className='absolute top-4 right-2'
              type='button'
              onClick={e => {
                e.stopPropagation();
                onCancel();
              }}
            >
              <CloseButton />
            </button>
            <img
              src={URL.createObjectURL(file)}
              className='max-w-full h-auto mt-3 object-cover'
              alt='post'
            />
          </>
        ) : (
          <FileButton />
        )}
      </div>
      <input
        type='file'
        className='hidden'
        ref={ref}
        onChange={onChangeFileInput}
      />
      <div className='mt-3 w-[100%] flex items-center bg-teal-300 rounded-lg hover:bg-teal-400 active:ring-4 ring-teal-200'>
        <button className=' mx-auto font-bold text-lg h-9 '>
          Post
        </button>
      </div>
    </form>
  );
}

function FileButton({ onClick }) {
  return (
    <div
      className='relative w-[100%]'
      role='button'
      onClick={onClick}
    >
      <div className='flex flex-col items-center  mt-3 py-3 rounded-md bg-gray-100 hover:bg-gray-200'>
        <div className='rounded-full bg-gray-300 hover:bg-gray-400 p-2 relative h-20 w-20 '>
          <div className='absolute right-4 bottom-4 opacity-50'>
            <AddPhoto />
          </div>
        </div>
        <div className='mt-1'>Add Photos</div>
      </div>
    </div>
  );
}
