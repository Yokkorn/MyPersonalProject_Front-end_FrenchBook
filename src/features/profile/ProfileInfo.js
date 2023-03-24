import Avatar from "../../components/Avatar";
import AvatarGroup from "../../components/AvatarGroup";

export default function ProfileInfo({
  profileUser: { profileImage, firstName, lastName },
  profileFriends,
}) {
  return (
    <>
      <div className='-mt-16 ml-[11%] z-10 flex'>
        <Avatar
          src={profileImage}
          size='190'
          borderSize='2'
          borderColor='white'
        />
        <div className=' mx-4  items-center md:flex-row md:items-start'>
          <h2 className='font-bold text-3xl mt-20 mb-0'>
            {firstName} {lastName}
          </h2>
          {profileFriends.length !== 0 && (
            <span className='text-muted py-1 opacity-50'>
              {profileFriends.length} Friend{""}
              {profileFriends.length > 1 ? "s" : ""}
            </span>
          )}
          <AvatarGroup
            max='10'
            data={profileFriends}
            size='36'
            borderColor='white'
            borderSize='2'
          />
        </div>
      </div>
    </>
  );
}
