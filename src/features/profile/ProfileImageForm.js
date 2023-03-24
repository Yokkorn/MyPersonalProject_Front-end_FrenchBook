import { useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Avatar from "../../components/Avatar";
import useLoading from "../../hooks/useLoading";
import * as userApi from "../../apis/user-api";

export default function ProfileImageForm() {
  const { authenticatedUser, updateProfile } = useAuth();
  const { profileImage } = authenticatedUser;

  const [file, setFile] = useState(null);

  const inputEl = useRef();
  return (
    <>
      <div className='flex justify-between items-center w-[490px] mt-8'>
        <h1 className='mb-0 font-bold text-lg'>Profile Picture</h1>
        <input
          type='file'
          className='hidden'
          ref={inputEl}
          onChange={e => {
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <div className='flex gap-8'>
          {file && (
            <>
              <button className='btn text-teal-500 hover:text-teal-700 font-bold'>
                Save
              </button>
              <button
                className='btn text-teal-500 hover:text-teal-700 font-bold'
                onClick={() => {
                  setFile(null);
                  inputEl.current.value = null;
                }}
              >
                Cancel
              </button>
            </>
          )}
          <button
            className='btn text-teal-500 hover:text-teal-700 font-bold'
            onClick={() => inputEl.current.click()}
          >
            Edit
          </button>
        </div>
      </div>
      <div className='flex  justify-center mt-3'>
        <span onClick={() => inputEl.current.click()}>
          <Avatar
            src={file ? URL.createObjectURL(file) : profileImage}
            size='200'
          />
        </span>
      </div>
    </>
  );
}
