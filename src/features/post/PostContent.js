export default function PostContent({
  posts: { title, image }
}) {
  return (
    <div className='mt-3'>
      {title && (
        <p className='text-base mb-0 px-3'>{title}</p>
      )}
      {image && (
        <div className='mt-3 -px-4'>
          <img
            src={image}
            alt='post'
            className='w-full h-auto object-cover'
          />
        </div>
      )}
    </div>
  );
}
