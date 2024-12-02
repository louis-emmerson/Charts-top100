function AlbumCardSkeleton() {
  return (
    <div
      className="w-full h-56 hover:h-80 md:size-72 md:hover:h-72 rounded-2xl"
      
      
    >
      {/* bg-gradient-to-r from-black/25 to-black */}

      <div className="animate-pulse bg-gray-300 p-4 h-full rounded-2xl flex flex-col justify-end">
        <div className="h-7 bg-gray-400 w-12 rounded-md"></div>
        <div className="mt-3 h-6 bg-gray-400 w-48 rounded-md"></div>
        <div className="mt-3 h-6 bg-gray-400 w-28 rounded-md" ></div>
        
        
      </div>
    </div>
  )
}

export default AlbumCardSkeleton
