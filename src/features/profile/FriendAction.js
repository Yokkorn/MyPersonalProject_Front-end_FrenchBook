import { useParams } from "react-router-dom";
import * as friendApi from "../../apis/friend-api";
import { STATUS_UNKNOWN } from "../../config/constant";
import useAuth from "../../hooks/useAuth";
import { Unfriend } from "../../icons";
import { toast } from "react-toastify";

export default function FriendAction({
  setProfileFriends,
  setStatusWithAuthUser,
}) {
  const { userId } = useParams();
  const {
    authenticatedUser: { id },
  } = useAuth();
  const handleClickButton = async () => {
    await friendApi.deleteFriend(userId);
    toast.success("Unfriend success");
    setStatusWithAuthUser(STATUS_UNKNOWN);
    setProfileFriends(oldFriends => oldFriends.filter(el => el.id !== id));
  };

  return (
    <>
      <button
        className='bg-neutral-300 rounded-lg flex gap-1 p-2 px-4 hover:bg-neutral-400 active:ring-2 ring-neutral-500'
        onClick={handleClickButton}
      >
        <Unfriend />
        <span className='pt-1'>Unfriend</span>
      </button>
    </>
  );
}
