import FormHeader from "@/components/ui/FormHeader";
import PasswordInput from "@/components/ui/password-input";
import { Button } from "@nextui-org/button";
import { useHistoryStore } from "../store";
import EmailWrapper from "./EmailWrapper";

export default function Password() {
  const { goToNext } = useHistoryStore();

  return (
    <EmailWrapper>
      <FormHeader title='Great! , Now add your password' className='mb-8' />
      <div className='w-10/12 mx-auto flex flex-col'>
        <PasswordInput showStrength />
        <Button
          className='bg-customPrimary mt-8 font-clash-display w-[155px] h-[49px] duration-300 font-medium rounded-[41px] text-sm outline-none'
          onPress={goToNext}
          type='button'
        >
          Next
        </Button>
      </div>
    </EmailWrapper>
  );
}
