const Loader = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-purple-600 border-r-blue-500 border-b-purple-600 border-l-blue-500 animate-spin"></div>
        <div className="absolute top-2 left-2 w-12 h-12 rounded-full border-4 border-t-blue-500 border-r-purple-600 border-b-blue-500 border-l-purple-600 animate-spin animation-delay-150"></div>
      </div>
    </div>
  )
}

export default Loader
