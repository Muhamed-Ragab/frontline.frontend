import Loader from "./Loader";
import Placeholder from "./Placeholder";
import RequestError from "./RequestError";

type AsyncDataWrapperProps = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  children: React.ReactNode;
  isEmpty?: boolean;
  placeholderIcon?: React.ReactNode;
  placeholderTitle?: string;
  placeholderDescription?: string;
};

const AsyncDataWrapper = ({
  isLoading,
  isError,
  isSuccess,
  isEmpty = false,
  children,
  placeholderIcon,
  placeholderTitle,
  placeholderDescription,
}: AsyncDataWrapperProps) => {
  if (isLoading) {
    return (
      <div className='w-full flex items-center justify-center row-span-2 flex-grow'>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className='w-full flex items-center justify-center row-span-2 flex-grow'>
        <div className='mx-auto'>
          <RequestError />
        </div>
      </div>
    );
  }

  if (isEmpty && isSuccess) {
    return (
      <div className='w-full'>
        <div className='mt-5'>
          <Placeholder
            icon={placeholderIcon || <div />}
            title={placeholderTitle || "No data found"}
            description={placeholderDescription || "No data found"}
          />
        </div>
      </div>
    );
  }

  if (isSuccess && !isEmpty && !isLoading) {
    return children;
  }

  return null;
};
export default AsyncDataWrapper;
