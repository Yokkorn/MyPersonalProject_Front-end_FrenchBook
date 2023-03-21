import { useState } from "react";
import Input from "../../components/Input";
import validateRegister from "../../validators/validate-register";
import * as authApi from "../../apis/auth-api";

const initialInput = {
  firstName: "",
  lastName: "",
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        await authApi.register(input);
      }
    } catch (err) {}
  };

  return (
    <form
      className='w-[100%] flex flex-col items-center justify-center'
      onSubmit={handleSubmitForm}
    >
      {/* firstName */}
      <div className='mt-4'>
        <Input
          placeholder='Firstname'
          name='firstName'
          value={input.firstName}
          onChange={handleChangeInput}
          error={error.firstName}
        />
      </div>

      {/* lastname */}
      <div className='mt-4'>
        <Input
          placeholder='Lastname'
          name='lastName'
          value={input.lastName}
          onChange={handleChangeInput}
          error={error.lastName}
        />
      </div>

      {/* emailOrMobile */}
      <div className='mt-4'>
        <Input
          placeholder='Email Or Mobile'
          name='emailOrMobile'
          value={input.emailOrMobile}
          onChange={handleChangeInput}
          error={error.emailOrMobile}
        />
      </div>

      {/* password */}
      <div className='mt-4'>
        <Input
          type='password'
          placeholder='New password'
          name='password'
          value={input.password}
          onChange={handleChangeInput}
          error={error.password}
        />
      </div>

      {/* confirmPassword */}
      <div className='mt-4'>
        <Input
          type='password'
          placeholder='Confirm password'
          name='confirmPassword'
          value={input.confirmPassword}
          onChange={handleChangeInput}
          error={error.confirmPassword}
        />
      </div>

      <div className='w-fit mb-3 mt-5'>
        <button
          type='submit'
          className='py-2 px-8 bg-teal-300 hover:bg-teal-500 w-full text-white font-bold  border-b-2 border-teal-500 hover:border-teal-300 active:ring-4 active:ring-teal-200 rounded'
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
