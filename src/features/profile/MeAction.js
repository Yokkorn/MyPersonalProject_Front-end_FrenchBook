import { IconPen } from "../../icons";

export default function MeAction() {
  return (
    <button className='bg-neutral-300 rounded-lg flex gap-1 p-2 px-4'>
      <IconPen />
      <span className='pt-1'>Edit Profile</span>
    </button>
  );
}
