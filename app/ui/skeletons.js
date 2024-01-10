// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function DisplayCardSkeleton() {

  <div className={`${shimmer} rounded-xl bg-gray-100 p-2 shadow-sm max-w-96`}>
      <div className="flex p-4">
        <h3 className=" text-sm font-medium"></h3>
      </div>
      <div className="flex justify-center bg-gray-200">
        {/* <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="rounded-xl"
        /> */}
      </div>
      <p
        className='rounded-xl bg-white p-4 text-center overflow-wrap break-words m-2'>
        
      </p>
    </div>
}