import type { ErrorResponse } from "@/hooks/api/types";
import { useSendCode } from "@/hooks/auth/use-send-code";
import type { VerifyForgotTokenSchema } from "@/utils/validations/auth";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import type { AxiosError } from "axios";
import { type Dispatch } from "react";
import { useFormContext } from "react-hook-form";

export default function SendCode({
  goNext,
}: {
  goNext: Dispatch<React.SetStateAction<"sendCode" | "verifyEmail">>;
}) {
  const { register, getValues, setValue } =
    useFormContext<VerifyForgotTokenSchema>();
  const {
    loading: emailLoading,
    error: emailError,
    runAsync: sendEmailCode,
  } = useSendCode("password");

  const handleNext = async () => {
    const email = getValues("email") as string;
    const emailData = await sendEmailCode({ email });
    const { forgotToken } = emailData.data;
    setValue("forgotToken", forgotToken);
    goNext("verifyEmail");
  };

  return (
    <>
      <div>
        <h2 className='text-3xl font-clash-display text-center mb-4 z-50 font-medium'>
          Forgot your password?
        </h2>
        <p className='text-sm opacity-30 text-center'>
          Enter your email for instructions
        </p>
      </div>
      <div className='flex flex-col'>
        <Input
          id='email'
          type='email'
          {...register("email")}
          label='Email Address'
          variant='underlined'
          className='w-[436px]'
        />
        {emailError && (
          <span className='text-xs text-danger mt-1 mx-1'>
            {(emailError as AxiosError<ErrorResponse>)?.response?.data?.message}
          </span>
        )}
        <Button
          className='bg-customPrimary mx-auto mt-12 w-[180px] h-[49px] duration-300 font-medium rounded-[41px] text-sm outline-none'
          type='button'
          onPress={handleNext}
          isLoading={emailLoading}
          isDisabled={emailLoading}
        >
          Send Code
        </Button>
      </div>
    </>
  );
}
