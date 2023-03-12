import LoginForm from "../features/auth/LoginForm";
import RegisterContainer from "../features/auth/RegisterContainer";
import { DogPaw } from "../icons";

export default function LoginPage() {
  return (
    <>
      <div className='flex justify-center container mx-auto my-auto w-screen h-screen items-center flex-col'>
        <div className='flex gap-2  items-center'>
          <div className='text-teal-400   pb-8 text-3xl font-bold pt-10'>
            Welcome back
          </div>
          <DogPaw />
        </div>
        <LoginForm />
        <RegisterContainer />
      </div>
    </>
  );
}
