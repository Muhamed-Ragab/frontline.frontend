import FormHeader from "@/components/ui/FormHeader";
import type { ErrorResponse } from "@/hooks/api/types";
import { useSendCode } from "@/hooks/auth/use-send-code";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import type { AxiosError } from "axios";
import { useFormContext } from "react-hook-form";
import { useHistoryStore } from "../store";
import EmailWrapper from "./EmailWrapper";
import { OAuth } from "./OAuth";

export default function Email() {
  const { register, getValues, setValue } = useFormContext();
  const { goToNext } = useHistoryStore();
  const {
    loading: emailLoading,
    error: emailError,
    runAsync: sendEmailCode,
  } = useSendCode("email");

  const handleNext = async () => {
    const email = getValues("email") as string;
    const emailData = await sendEmailCode({ email });
    const { verificationToken } = emailData.data;
    setValue("verificationToken", verificationToken);
    goToNext();
  };

  return (
    <EmailWrapper>
      <div className='flex flex-col gap-6 relative'>
        <FormHeader title='Get started with your email' />
        <div className='flex flex-col items-start justify-center'>
          <Input
            id='email'
            type='email'
            {...register("email")}
            label='Email Address'
            variant='underlined'
            classNames={{ label: "font-medium" }}
          />
          {emailError?.message && (
            <span className='text-danger text-sm mt-2'>
              {
                (emailError as AxiosError<ErrorResponse>)?.response?.data
                  ?.message
              }
            </span>
          )}
          <Button
            className='bg-customPrimary mt-8 w-[155px] h-[49px] duration-300 font-medium rounded-[41px] text-sm outline-none'
            onPress={handleNext}
            type='button'
            isLoading={emailLoading}
            isDisabled={emailLoading}
          >
            Next
          </Button>
          <OAuth state='register' />
        </div>
      </div>
    </EmailWrapper>
  );
}
