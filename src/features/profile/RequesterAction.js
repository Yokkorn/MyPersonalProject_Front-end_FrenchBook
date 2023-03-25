import { useParams } from "react-router-dom";
import * as friendApi from "../../apis/friend-api";
import { STATUS_UNKNOWN } from "../../config/constant";
import { Unfriend } from "../../icons";

export default function RequesterAction({ setStatusWithAuthUser }) {
  const { userId } = useParams();
  const handleClickButton = async () => {
    await friendApi.deleteFriend(userId);
    setStatusWithAuthUser(STATUS_UNKNOWN);
  };

  return (
    <button
      className='bg-neutral-300 rounded-lg flex gap-1 p-2 px-4 hover:bg-neutral-400 active:ring-2 ring-neutral-500'
      onClick={handleClickButton}
    >
      <Unfriend />
      <span className='pt-1'>Cancle Request</span>
    </button>
  );
}
