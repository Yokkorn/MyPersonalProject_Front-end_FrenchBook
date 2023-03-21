import { useState } from "react";
import Modal from "../../components/Modal";

import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex justify-center container mx-auto mt-6 text-teal-500 text-base '>
      <button
        type='button'
        className='hover:text-orange-500'
        onClick={() => setOpen(true)}
      >
        Don't have an account? Get Started
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title='Sign Up'>
        <RegisterForm onClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
