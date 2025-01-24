import MainShape from "@/components/Shapes/mainShape";
import useRegister from "@/hooks/auth/use-register";
import useUpload from "@/hooks/files/use-upload";
import Cookies from "@/utils/cookies";
import type { RegisterData } from "@/utils/validations/auth";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";
import { IoChevronBack } from "react-icons/io5";
import { useHistoryStore } from "../store";
import ImageUploader from "./ImageUploader";

const inputs = [
  {
    Title: "Job Title",
    id: "jobTitle",
    placeholder: "job title",
  },
  {
    Title: "Department",
    id: "department",
    placeholder: "company department",
  },
  {
    Title: "Location",
    id: "country",
    placeholder: "location",
  },
];

export default function JobDetails() {
  const { goToPrevious, goToNext } = useHistoryStore();
  const { register, getValues } = useFormContext();
  const { runAsync: uploadImage, loading: uploadLoading } = useUpload();
  const { runAsync: registerFetch, loading: registerLoading } = useRegister();

  const handleNext = async () => {
    // get register data
    const data = getValues() as RegisterData;

    // append image to formData
    const formData = new FormData();
    formData.append("image", data.image);

    const response = await uploadImage(formData);
    const { path: imageUrl } = response.data;

    // update data
    data.image = imageUrl;
    data.companyUrl = `https://${data.companyUrl}`;

    // register
    const registerResponse = await registerFetch(data);

    // set cookies
    Cookies.set({
      name: "accessToken",
      value: registerResponse.data.accessToken,
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
      sameSite: "strict",
    });
    Cookies.set({
      name: "refreshToken",
      value: registerResponse.data.refreshToken,
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
      sameSite: "strict",
    });

    // go to welcome
    goToNext();
  };

  return (
    <div>
      <div className='flex justify-end items-end -mb-10 mt-16 mr-24'>
        <MainShape
          textColor='foreground'
          dir='rtl'
          text='Great ! Let’s set you up !'
        />
      </div>
      <div>
        <button
          className='flex items-center justify-center mb-16 cursor-pointer'
          onClick={goToPrevious}
          type='button'
        >
          <IoChevronBack />
          <span className='ml-2 font-medium'>Back</span>
        </button>
        <section className='flex gap-6 justify-between items-center'>
          <ImageUploader />
          {inputs.map((input, index) => (
            <fieldset key={index} className='w-3/12'>
              <h2 className='text-3xl font-clash-display mb-8 z-50 font-medium'>
                {input.Title}
              </h2>
              <Input
                id={input.id}
                type='text'
                {...register(input.id)}
                placeholder={input.placeholder}
                variant='underlined'
                className='w-full'
              />
            </fieldset>
          ))}
        </section>
        <div className='flex justify-end mt-8 items-center gap-3'>
          <Button
            className='bg-customPrimary w-[100px] h-[41px] duration-300 font-medium rounded-[41px] text-sm outline-none'
            type='button'
            onPress={handleNext}
            isLoading={registerLoading || uploadLoading}
            isDisabled={registerLoading || uploadLoading}
          >
            Next
          </Button>
          <span className='font-normal text-[15px] text-[#8E8D99]'>
            Or Press Enter
          </span>
        </div>
      </div>
    </div>
  );
}
