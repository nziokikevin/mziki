import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, i }) => {
  const activeSong = 'Test';

  return (
    <div className="flex flex-col bg-white/5 bg-opactiy-80 w-[250px] backdrop-blur-sm animate-slideup rounded-lg cursor-pointer p-4">
      <div className="w-full h-56 group relative">
        <div
          className={`bg-black bg-opacity-50 absolute justify-center items-center inset-0 group-hover:flex ${
            activeSong?.title === song.title
              ? 'flex bg-black bg-opacity-70'
              : 'hidden'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default SongCard;
