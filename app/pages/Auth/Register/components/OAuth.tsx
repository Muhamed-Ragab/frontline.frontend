import { LinkedIn } from "public/icons/LinkedIn";
import { MicrosoftTeams } from "public/icons/MicrosoftTeams";
import { Link } from "react-router";

const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_OAUTH_URL;
const MICROSOFT_URL = import.meta.env.VITE_MICROSOFT_OAUTH_URL;

type OAuthProps = {
  state: "register" | "login";
};

export const OAuth = ({ state }: OAuthProps) => {
  return (
    <div className='flex flex-col gap-6 mt-5'>
      <span className='flex text-sm text-[#D3D3DC] pl-4'>or</span>
      <div className='flex gap-3 '>
        <Link
          to={MICROSOFT_URL}
          className='bg-black gap-2 flex justify-center items-center text-white w-[240px] h-[43px] duration-300 font-medium rounded-[41px] text-xs outline-none border-1 border-[#E5E5E5]'
          type='button'
        >
          <MicrosoftTeams />
          Sign {state === "register" ? "up" : "in"} with Microsoft Teams
        </Link>
        <Link
          to={LINKEDIN_URL}
          className='bg-black gap-2 flex justify-center items-center text-white w-[196px] h-[43px] duration-300 font-medium rounded-[41px] text-xs outline-none border-1 border-[#E5E5E5]'
          type='button'
        >
          <LinkedIn />
          Sign {state === "register" ? "up" : "in"} with LinkedIn
        </Link>
      </div>
      <span className='block opacity-40 mt-3 font-sans text-[10px] max-w-60 text-black text-start'>
        By Continuing, I acknowledge and agree to the terms on behalf of the
        Company identified above
      </span>
    </div>
  );
};
