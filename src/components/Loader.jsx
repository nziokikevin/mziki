import { loader } from '../assets';

const Loader = ({ title }) => (
  <div className="flex flex-col justify-center items-center w-full">
    <img src={loader} alt="loader" className="h-32 w-32 object-contain" />
    <h1 className="font-bold text-white text-2xl mt-2">{title || 'Loading...'}</h1>
  </div>
);

export default Loader;
