import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";
import { IoChevronBack } from "react-icons/io5";
import { useHistoryStore } from "../store";
import RegisterChatWrapper from "./RegisterChatWrapper";

export default function CompanyWebsite() {
  const { goToPrevious, goToNext } = useHistoryStore();
  const { register } = useFormContext();

  return (
    <RegisterChatWrapper>
      <div className='flex flex-col items-start content-start'>
        <button
          className='flex items-center justify-center -mt-20 mb-16 cursor-pointer '
          onClick={goToPrevious}
          type='button'
        >
          <IoChevronBack />
          <span className='ml-2 font-medium'>Back</span>
        </button>

        <h2 className='text-3xl font-clash-display text-center mb-8 z-50 font-medium'>
          Company Website
        </h2>

        <Input
          id='companyUrl'
          type='text'
          {...register("companyUrl")}
          placeholder='Company website'
          variant='underlined'
          className='min-w-[438px]'
          startContent={
            <span className='text-small font-medium'>https://</span>
          }
        />

        <div className='space-x-3'>
          <button
            className='bg-customPrimary mt-8 w-[100px] h-[41px] duration-300 font-medium rounded-[41px] text-sm outline-none'
            onClick={goToNext}
            type='button'
          >
            Next
          </button>
          <p className='font-normal inline-block text-[15px] text-[#8E8D99]'>
            Or Press Enter
          </p>
        </div>
      </div>
    </RegisterChatWrapper>
  );
}
