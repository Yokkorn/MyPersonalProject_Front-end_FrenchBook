import { STATUS_ME } from "../../config/constant";
import MeAction from "./MeAction";

export default function ProfileAction({
  statusWithAuthUser,
  updateProfileUser,
  setProfileFriends,
  setStatusWithAuthUser,
}) {
  return (
    <div className='mb-3 absolute top-[68%] right-[10%]'>
      {statusWithAuthUser === STATUS_ME && <MeAction />}
    </div>
  );
}
