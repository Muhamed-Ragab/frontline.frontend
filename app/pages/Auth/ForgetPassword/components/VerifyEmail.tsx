import FormHeader from "@/components/ui/FormHeader";
import type { ErrorResponse } from "@/hooks/api/types";
import { useSendCode } from "@/hooks/auth/use-send-code";
import { useVerify } from "@/hooks/auth/use-verify";
import { Button } from "@nextui-org/button";
import { InputOtp } from "@nextui-org/input-otp";
import type { AxiosError } from "axios";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";

export default function VerifyEmail() {
  const { register, getValues, setValue } = useFormContext();
  const navigate = useNavigate();
  const {
    loading: verifyLoading,
    error: verifyError,
    runAsync: sendVerificationCode,
  } = useVerify("password");
  const {
    loading: emailLoading,
    error: emailError,
    runAsync: sendEmailCode,
  } = useSendCode("password");

  const handleNext = async () => {
    const email = getValues("email") as string;
    const code = Number(getValues("verifyEmail"));
    const forgotToken = getValues("forgotToken") as string;
    const response = await sendVerificationCode({
      email,
      code,
      forgotToken,
    });
    setValue("resetToken", response.data.resetToken);
    navigate("/auth/new-password", {
      state: { resetToken: response.data.resetToken },
    });
  };

  const handleResend = async () => {
    const email = getValues("email") as string;
    const emailData = await sendEmailCode({ email });
    setValue("forgotToken", emailData.data.forgotToken);
  };
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-8 text-center'>
        <FormHeader title='Check your email' />
        <div className='space-x-1'>
          <span className='text-foreground-secondary text-[10px] font-roobert-pro'>
            Enter verification code sent to
          </span>
          <span className='text-[10px] font-roobert-pro text-foreground font-medium'>
            {getValues("email")}
          </span>
        </div>
      </div>
      <InputOtp
        id='verifyEmail'
        {...register("verifyEmail")}
        length={6}
        variant='bordered'
        isRequired
        classNames={{
          segment: "w-[68px] h-[74px] mx-3 text-5xl font-light",
        }}
      />
      {verifyError && (
        <span className='text-xs text-danger'>
          {(verifyError as AxiosError<ErrorResponse>)?.response?.data?.message}
        </span>
      )}
      <div className='space-x-5'>
        <Button
          onPress={handleResend}
          className='bg-black mt-8 w-[155px] h-[49px] text-white duration-300 font-medium rounded-[41px] text-sm outline-none'
          type='button'
          isLoading={emailLoading}
          isDisabled={emailLoading}
        >
          Resend
        </Button>
        <Button
          className='bg-customPrimary mt-8 w-[155px] h-[49px] duration-300 font-medium rounded-[41px] text-sm outline-none'
          onPress={handleNext}
          type='button'
          isLoading={verifyLoading}
          isDisabled={verifyLoading}
        >
          Verify
        </Button>
      </div>
    </div>
  );
}
