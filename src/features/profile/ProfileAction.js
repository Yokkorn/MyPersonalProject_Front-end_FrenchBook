import {
  STATUS_ACCEPTER,
  STATUS_FRIEND,
  STATUS_ME,
  STATUS_REQUESTER,
  STATUS_UNKNOWN,
} from "../../config/constant";
import MeAction from "./MeAction";
import FriendAction from "./FriendAction";
import UnknownAction from "./UnknownAction";
import AccepterAction from "./AccepterAction";
import RequesterAction from "./RequesterAction";

export default function ProfileAction({
  statusWithAuthUser,
  updateProfileUser,
  setProfileFriends,
  setStatusWithAuthUser,
}) {
  return (
    <div className='mb-3 absolute top-[68%] right-[10%]'>
      {statusWithAuthUser === STATUS_ME && (
        <MeAction updateProfileUser={updateProfileUser} />
      )}
      {statusWithAuthUser === STATUS_FRIEND && (
        <FriendAction
          setProfileFriends={setProfileFriends}
          setStatusWithAuthUser={setStatusWithAuthUser}
        />
      )}
      {statusWithAuthUser === STATUS_UNKNOWN && (
        <UnknownAction setStatusWithAuthUser={setStatusWithAuthUser} />
      )}
      {statusWithAuthUser === STATUS_REQUESTER && (
        <AccepterAction
          setProfileFriends={setProfileFriends}
          setStatusWithAuthUser={setStatusWithAuthUser}
        />
      )}
      {statusWithAuthUser === STATUS_ACCEPTER && (
        <RequesterAction setStatusWithAuthUser={setStatusWithAuthUser} />
      )}
    </div>
  );
}
