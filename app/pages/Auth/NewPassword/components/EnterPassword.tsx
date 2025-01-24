import PasswordInput from "@/components/ui/password-input";
import useResetPassword from "@/hooks/auth/use-reset-password";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useToggle } from "ahooks";
import { EyeFilledIcon, EyeSlashFilledIcon } from "public/icons";
import type { Dispatch, SetStateAction } from "react";
import { useFormContext } from "react-hook-form";
import { useLocation } from "react-router";

export default function EnterPassword({
  moveTo,
}: {
  moveTo: Dispatch<SetStateAction<"enterPassword" | "allDone">>;
}) {
  const [isVisible, { toggle: toggleVisibility }] = useToggle(false);
  const { state } = useLocation();
  const { register, getValues } = useFormContext();
  const { runAsync: resetPassword, loading } = useResetPassword();

  const checkPassword = () => {
    const password = getValues("password") as string;
    const confirmPassword = getValues("confirmPassword") as string;
    return password === confirmPassword;
  };

  const handleNewPassword = async () => {
    if (!checkPassword()) {
      console.log("passwords do not match");
      return;
    }
    const password = getValues("password") as string;
    const resetToken = state.resetToken as string;

    await resetPassword({ password, resetToken });
    moveTo("allDone");
  };
  return (
    <>
      <h2 className='text-3xl font-clash-display text-center mx-auto mb-8 z-50 font-medium'>
        Set a new password
      </h2>
      <div>
        <div className='mb-10'>
          <PasswordInput />
        </div>
        <Input
          endContent={
            <button
              aria-label='toggle password visibility'
              className='focus:outline-none'
              type='button'
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
              ) : (
                <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
              )}
            </button>
          }
          id='confirmPassword'
          placeholder='Confirm Password'
          {...register("confirmPassword")}
          type={isVisible ? "text" : "password"}
          variant='underlined'
          classNames={{ inputWrapper: "after:bg-customPrimary" }}
        />
        <div className='text-center'>
          <Button
            className='bg-customPrimary mt-8 font-clash-display w-[255px] h-[49px] duration-300 font-medium rounded-[41px] text-sm outline-none'
            onPress={handleNewPassword}
            type='button'
            isLoading={loading}
          >
            Set new Password
          </Button>
        </div>
      </div>
    </>
  );
}
