import Avatar from "../components/Avatar";
import useAuth from "../hooks/useAuth";

export default function DropdownToggle() {
  const {
    authenticatedUser: { profileImage },
  } = useAuth();
  return (
    <div>
      <Avatar src={profileImage} size='55' />
    </div>
  );
}
