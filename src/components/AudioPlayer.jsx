function AudioPlayer({ currentTrack }) {
  return (
    <div className="p-4 rounded-lg shadow-md flex items-center">
      <audio
        key={currentTrack}
        controls
        autoPlay
        className=" max-w-md rounded-lg bg-white w-full"
      >
        <source src={currentTrack} type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default AudioPlayer
