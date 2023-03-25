import { useRef, useState } from "react";
// import coverImage from "../../assets/wall.jpeg";
import useAuth from "../../hooks/useAuth";
import useLoading from "../../hooks/useLoading";
import * as userApi from "../../apis/user-api";
import { toast } from "react-toastify";

export default function CoverImageForm({ onSuccess, updateProfileUser }) {
  const { authenticatedUser, updateProfile } = useAuth();
  const { coverImage } = authenticatedUser;
  const { startLoading, stopLoading } = useLoading();

  const [file, setFile] = useState(null);

  const inputEl = useRef();

  const handleClickSave = async () => {
    startLoading();
    const formData = new FormData();
    formData.append("coverImage", file);
    const res = await userApi.updateProfile(formData);
    toast.success("Update your cover image success");
    updateProfile(res.data);
    updateProfileUser(res.data);
    stopLoading();
    setFile(null);
    onSuccess();
  };

  return (
    <>
      <div className='flex justify-between items-center w-[490px] mt-4'>
        <h1 className='mb-0 font-bold text-lg'>Cover Picture</h1>
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
              <button
                className='btn text-teal-500 hover:text-teal-700 font-bold'
                onClick={handleClickSave}
              >
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
          <img
            src={file ? URL.createObjectURL(file) : coverImage}
            alt='user'
            className='rounded-lg'
          />
        </span>
      </div>
    </>
  );
}
