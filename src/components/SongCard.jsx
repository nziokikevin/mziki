import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <div className="flex flex-col bg-white/5 bg-opactiy-80 w-[250px] backdrop-blur-sm animate-slideup rounded-lg cursor-pointer p-4">
      <div className="w-full h-56 group relative">
        <div
          className={`bg-black bg-opacity-50 absolute justify-center items-center inset-0 group-hover:flex ${
            activeSong?.title === song.title
              ? 'flex bg-black bg-opacity-70'
              : 'hidden'
          }`}
        >
          <PlayPause
            activeSong={activeSong}
            isPlaying={isPlaying}
            song={song}
            handlePlay={handlePlayClick}
            handlePause={handlePauseClick}
          />
        </div>
        <img src={song.images?.coverart} alt="song_image" />
      </div>

      <div className="flex flex-col mt-4">
        <p className="text-lg text-white truncate font-semibold">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm text-gray-300 truncate mt-1">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0].adamid}`
                : '/top-artists'
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
