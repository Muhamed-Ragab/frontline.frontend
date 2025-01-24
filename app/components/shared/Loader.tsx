import logo from "public/images/frontline-logo.png";

const Loader = () => {
  return (
    <img
      src={logo}
      className='aspect-square w-12 rounded object-cover animate-pulse'
      alt='logo'
    />
  );
};

export default Loader;
