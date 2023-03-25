import { useState } from "react";
import Modal from "../../components/Modal";
import { IconPen } from "../../icons";
import CoverImageForm from "./CoverImageForm";
import ProfileImageForm from "./ProfileImageForm";

export default function MeAction({ updateProfileUser }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className='bg-neutral-300 rounded-lg flex gap-1 p-2 px-4 hover:bg-neutral-400 active:ring-2 ring-neutral-500'
        onClick={() => setOpen(true)}
      >
        <IconPen />
        <span className='pt-1'>Edit Profile</span>
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title='Edit'>
        <ProfileImageForm
          onSuccess={() => setOpen(false)}
          updateProfileUser={updateProfileUser}
        />
        <hr className='mt-8' />
        <CoverImageForm
          onSuccess={() => setOpen(false)}
          updateProfileUser={updateProfileUser}
        />
      </Modal>
    </>
  );
}
