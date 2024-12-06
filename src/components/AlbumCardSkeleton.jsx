function AlbumCardSkeleton() {
  return (
    <div className="h-56 w-full rounded-2xl hover:h-80 md:size-72 md:hover:h-72">
      <div className="flex h-full animate-pulse flex-col justify-end rounded-2xl bg-gray-300 p-4">
        <div className="h-7 w-12 rounded-md bg-gray-400"></div>
        <div className="mt-3 h-6 w-48 rounded-md bg-gray-400"></div>
        <div className="mt-3 h-6 w-28 rounded-md bg-gray-400"></div>
      </div>
    </div>
  );
}

export default AlbumCardSkeleton;
