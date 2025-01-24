import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaCamera } from "react-icons/fa";

export default function ImageUploader() {
  const { setValue } = useFormContext();
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
    setValue("image", file);
  };

  return (
    <fieldset className='w-3/12 flex flex-col justify-between items-center'>
      <label
        htmlFor='image'
        className='cursor-pointer w-full max-w-[300px] aspect-square flex items-center justify-center font-clash-display text-2xl font-semibold text-white bg-[#E9E9E9] rounded-[38px] overflow-hidden'
      >
        {image ? (
          <img src={image} alt='image' className='w-full h-full object-cover' />
        ) : (
          <FaCamera className='text-6xl' />
        )}
      </label>
      <input
        type='file'
        name='userAvatar'
        id='image'
        accept='image/*'
        onChange={handleImageChange}
        hidden
      />
    </fieldset>
  );
}
