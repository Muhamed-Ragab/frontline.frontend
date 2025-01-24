const Placeholder = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className='flex flex-col items-center'>
      <span className='mb-2 text-5xl'>{icon}</span>
      <span className='mb-1 text-xl font-semibold'>{title}</span>
      <span className='text-center text-sm'>{description}</span>
    </div>
  );
};

export default Placeholder;
