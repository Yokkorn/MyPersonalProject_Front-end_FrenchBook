import { useParams } from "react-router-dom";
import * as friendApi from "../../apis/friend-api";
import { STATUS_FRIEND, STATUS_UNKNOWN } from "../../config/constant";
import useAuth from "../../hooks/useAuth";
import { Addfriend, Unfriend } from "../../icons";

export default function AccepterAction({
  setProfileFriends,
  setStatusWithAuthUser,
}) {
  const { userId } = useParams();
  const { authenticatedUser } = useAuth();

  const handleClickAccept = async () => {
    await friendApi.acceptFriend(userId);
    setStatusWithAuthUser(STATUS_FRIEND);
    setProfileFriends(oldFriends => [...oldFriends, authenticatedUser]);
  };

  const handleClickReject = async () => {
    await friendApi.deleteFriend(userId);
    setStatusWithAuthUser(STATUS_UNKNOWN);
  };

  return (
    <>
      <div className='flex gap-3'>
        <button
          className='bg-neutral-300 rounded-lg flex gap-1 p-2 px-4 hover:bg-neutral-400 active:ring-2 ring-neutral-500'
          onClick={handleClickAccept}
        >
          <Addfriend />
          <span className='pt-1'>Accept</span>
        </button>
        <button
          className='bg-neutral-300 rounded-lg flex gap-1 p-2 px-4 hover:bg-neutral-400 active:ring-2 ring-neutral-500'
          onClick={handleClickReject}
        >
          <Unfriend />
          <span className='pt-1'>Reject</span>
        </button>
      </div>
    </>
  );
}
