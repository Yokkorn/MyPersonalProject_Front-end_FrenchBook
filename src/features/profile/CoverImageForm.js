import coverImage from "../../assets/wall.jpeg";

export default function CoverImageForm() {
  return (
    <>
      <div className='flex justify-between items-center w-[490px] mt-4'>
        <h1 className='mb-0 font-bold text-lg'>Cover Picture</h1>
        <input type='file' className='hidden' />
        <div className='flex gap-8'>
          <button className='btn text-teal-500 hover:text-teal-700 font-bold'>
            Save
          </button>
          <button className='btn text-teal-500 hover:text-teal-700 font-bold'>
            Cancel
          </button>
          <button className='btn text-teal-500 hover:text-teal-700 font-bold'>
            Edit
          </button>
        </div>
      </div>
      <div className='flex  justify-center mt-3'>
        <span>
          <img src={coverImage} alt='user' className='rounded-lg' />
        </span>
      </div>
    </>
  );
}
