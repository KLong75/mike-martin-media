export default function IndustrySupport({heading, helperText, supportList}) {
  return (
    <div className="flex flex-col justify-center">
      <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-2 md:mb-10">{heading}</h3>
      <p className="text-lg sm:text-xl">{helperText}</p>
      <ul className="-mt-4 sm:mt-0">
        {supportList.map((item, index) => (
          <li key={index} className="relative my-8 ">
            <h4 className="font-bold text-lg sm:text-xl md:mb-2">{item.heading}</h4>
            <span className="text-sm sm:text-base md:text-lg">{item.text}</span>
            <span className="absolute bottom-[-1rem] left-0 border-b border-black" style={{ width: 'calc(100% )' }}></span>
          </li>
        ))}
      </ul>
    </div>
  );
};