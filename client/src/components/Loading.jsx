
const Loading = () => {
  return ( 
    <div className="flex items-center gap-4 w-full mx-auto justify-center min-h-[30vh]">
      <h2><span className="text-4xl">Loading content</span> 
      <span className="animate-ping">.</span>
      <span className="animate-ping">.</span>
      <span className="animate-ping">.</span>
      </h2>
      <div className="size-8 rounded-full border-yellow-400 border-2 border-b-transparent animate-spin"></div>
    </div>
   );
}
 
export default Loading;