import CoverImage from "../../components/CoverImage";

export default function ProfileCover({ coverImage }) {
  return (
    <div className='bg-gray-500 relative m-auto  w-[80%] h-[500px] rounded-b-lg shadow-md overflow-hidden -z-50'>
      <CoverImage src={coverImage} />
    </div>
  );
}
