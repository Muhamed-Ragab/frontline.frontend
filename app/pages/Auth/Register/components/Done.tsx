import { useFormContext } from "react-hook-form";
import AllDone from "../../NewPassword/components/AllDone";

const Done = () => {
  const { getValues } = useFormContext();

  return (
    <div className='flex justify-center items-center h-full'>
      <AllDone
        customMessage={
          <p className='text-foreground-secondary text-sm'>
            Welcome{" "}
            <span className='text-foreground font-medium'>
              {getValues("name")}
            </span>
            !
          </p>
        }
      />
    </div>
  );
};

export default Done;
