import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import LoginWrapper from "../Login/components/LoginWrapper";
import AllDone from "./components/AllDone";
import EnterPassword from "./components/EnterPassword";

export default function NewPassword() {
  const form = useForm();
  const [value, setValue] = useState<"enterPassword" | "allDone">(
    "enterPassword"
  );

  const components: Record<"enterPassword" | "allDone", React.ReactNode> = {
    enterPassword: <EnterPassword moveTo={setValue} />,
    allDone: <AllDone message='Your password has been reset' />,
  };

  const onSubmit = (data: any) => console.log(data);
  return (
    <LoginWrapper>
      <FormProvider {...form}>
        <form className='h-full' onSubmit={form.handleSubmit(onSubmit)}>
          {components[value]}
        </form>
      </FormProvider>
    </LoginWrapper>
  );
}
