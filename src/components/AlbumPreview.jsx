function AlbumPreview({albumPreview ,setToggleAlbumPreview}) {
  return (
    <div className="fixed z-30 inset-0 overflow-y-auto bg-black/60" onClick={()=>{setToggleAlbumPreview(false)}}>
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div className="w-full inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <iframe
            height="450"
            width="100%"
            title="Media player"
            src={`https://embed.music.apple.com/us/album/${albumPreview.id.attributes["im:id"]}?itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1781270319&amp;theme=light`}
            id="embedPlayer"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            allow="autoplay *; encrypted-media *; clipboard-write"
            style={{ border: '0px', borderRadius: '12px', width: '100%', height: '450px', maxWidth: '660px' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AlbumPreview;
