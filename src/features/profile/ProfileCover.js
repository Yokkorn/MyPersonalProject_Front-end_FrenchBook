import CoverImage from "../../components/CoverImage";

export default function ProfileCover({ coverImage, updateProfileUser }) {
  return (
    <div className='bg-teal-500 relative m-auto  w-[80%] h-[500px] rounded-b-lg shadow-md overflow-hidden'>
      <CoverImage src={coverImage} />
    </div>
  );
}
