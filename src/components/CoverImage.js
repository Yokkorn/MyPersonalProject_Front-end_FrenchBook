import coverImage from "../assets/wall.jpeg";

export default function CoverImage({ src }) {
  return (
    <img
      src={src || coverImage}
      alt='cover'
      className='w-full shadow-lg object-cover'
    />
  );
}
