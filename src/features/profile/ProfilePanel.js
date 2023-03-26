import ProfileAction from "./ProfileAction";
import ProfileInfo from "./ProfileInfo";

export default function ProfilePanel({
  profileUser,
  profileFriends,
  statusWithAuthUser,
  updateProfileUser,
  setProfileFriends,
  setStatusWithAuthUser,
}) {
  return (
    <div className='relative mx-auto px-3 max-w-266 flex-col justify-center md:items-stretch space-x-4 z-10'>
      <ProfileInfo profileUser={profileUser} profileFriends={profileFriends} />
      <ProfileAction
        statusWithAuthUser={statusWithAuthUser}
        updateProfileUser={updateProfileUser}
        setProfileFriends={setProfileFriends}
        setStatusWithAuthUser={setStatusWithAuthUser}
      />
    </div>
  );
}
