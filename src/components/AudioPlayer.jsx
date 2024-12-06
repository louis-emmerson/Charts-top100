function AudioPlayer({ currentTrack }) {
  return (
    <div className="flex items-center rounded-lg p-4 shadow-md">
      <audio
        key={currentTrack}
        controls
        autoPlay
        className="w-full max-w-md rounded-lg bg-white"
      >
        <source src={currentTrack} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default AudioPlayer;
