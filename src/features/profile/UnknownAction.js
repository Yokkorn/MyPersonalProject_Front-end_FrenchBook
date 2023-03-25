import { useParams } from "react-router-dom";
import * as friendApi from "../../apis/friend-api";
import { STATUS_ACCEPTER } from "../../config/constant";
import { Addfriend } from "../../icons";

export default function UnknownAction({ setStatusWithAuthUser }) {
  const { userId } = useParams();
  const handleClickButton = async () => {
    await friendApi.addFriend(userId);
    setStatusWithAuthUser(STATUS_ACCEPTER);
  };

  return (
    <>
      <button
        className='bg-neutral-300 rounded-lg flex gap-1 p-2 px-4 hover:bg-neutral-400 active:ring-2 ring-neutral-500'
        onClick={handleClickButton}
      >
        <Addfriend />
        <span className='pt-1'>Add Friend</span>
      </button>
    </>
  );
}
