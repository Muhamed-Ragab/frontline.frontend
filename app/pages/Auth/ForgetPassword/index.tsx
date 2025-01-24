import { type VerifyForgotTokenSchema } from "@/utils/validations/auth";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import LoginWrapper from "../Login/components/LoginWrapper";
import SendCode from "./components/SendCode";
import VerifyEmail from "./components/VerifyEmail";

export default function ForgetPassword() {
  const form = useForm<VerifyForgotTokenSchema>();
  const [value, setValue] = useState<"sendCode" | "verifyEmail">("sendCode");

  const components: Record<"sendCode" | "verifyEmail", React.ReactNode> = {
    sendCode: <SendCode goNext={setValue} />,
    verifyEmail: <VerifyEmail />,
  };
  const onSubmit = (data: any) => console.log(data);
  return (
    <LoginWrapper>
      <FormProvider {...form}>
        <form className='h-full' onSubmit={form.handleSubmit(onSubmit) as any}>
          {components[value]}
        </form>
      </FormProvider>
    </LoginWrapper>
  );
}
