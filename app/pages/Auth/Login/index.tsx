import useLogin from "@/hooks/auth/use-login";
import type { LoginData } from "@/utils/validations/auth";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { EyeFilledIcon, EyeSlashFilledIcon } from "public/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { OAuth } from "../Register/components/OAuth";
import LoginWrapper from "./components/LoginWrapper";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { register, handleSubmit } = useForm<LoginData>();
  const { login, loading } = useLogin();

  return (
    <LoginWrapper>
      <h2 className='text-3xl font-clash-display text-center mb-8 z-50 font-medium'>
        Welcome Back
      </h2>
      <form
        className='flex flex-col items-start content-center'
        onSubmit={handleSubmit(login)}
      >
        <div className='flex justify-center items-start gap-10'>
          <div>
            <Input
              id='email'
              type='email'
              {...register("email")}
              label='Email Address'
              variant='underlined'
              className='w-[280px]'
            />
          </div>
          <div>
            <Input
              endContent={
                <button
                  aria-label='toggle password visibility'
                  className='focus:outline-none'
                  type='button'
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? (
                    <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                  ) : (
                    <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                  )}
                </button>
              }
              id='password'
              label='Password'
              type={isPasswordVisible ? "text" : "password"}
              {...register("password")}
              variant='underlined'
              className='w-[280px]'
            />
          </div>
        </div>
        <div className='space-x-3'>
          <Button
            className='bg-customPrimary mt-8 w-[123px] h-[49px] duration-300 font-medium rounded-[41px] text-sm outline-none'
            type='submit'
            isLoading={loading}
            isDisabled={loading}
          >
            Sign in
          </Button>
          <Link
            to='/auth/forget-password'
            className='text-[#747474] text-[10px]'
          >
            Forget Password
          </Link>
        </div>
        <OAuth state='login' />
      </form>
    </LoginWrapper>
  );
};

export default Login;
