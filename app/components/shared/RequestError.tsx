import { MdOutlineErrorOutline } from "react-icons/md";
import { Link } from "react-router";

const RequestError = ({
  message,
  buttonText,
}: {
  message?: string;
  buttonText?: string;
}) => {
  return (
    <div className='mx-auto w-fit text-center capitalize'>
      <MdOutlineErrorOutline className='mx-auto mb-2 text-5xl text-red-500' />
      <p className='mb-5 max-w-[400px] text-xl'>
        {message ??
          "An error occurred while processing your request, please try again later"}
      </p>
      <Link
        to='/'
        className='rounded-lg bg-customPrimary px-4 py-2 duration-300 hover:opacity-90 active:scale-95 font-roobert-pro'
      >
        {buttonText ?? "Back to Home"}
      </Link>
    </div>
  );
};

export default RequestError;
