export default function IndustrySupport({heading, helperText, supportList}) {
  return (
    <div className="flex flex-col justify-center">
      <h3 className="font-semibold text-xl sm:text-2xl lg:text-3xl xl:text-4xl mb-2 md:mb-10">{heading}</h3>
      <p className="text-lg sm:text-xl text-pretty">{helperText}</p>
      <ul className="-mt-4 sm:mt-0">
        {supportList.map((item, index) => (
          <li key={index} className="relative my-8 lg:my-10">
            <h4 className="font-bold text-lg sm:text-xl lg:text-2xl md:mb-2">{item.label}</h4>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">{item.description}</span>
            <span className="absolute bottom-[-1rem] left-0 border-b border-black" style={{ width: 'calc(100% )' }}></span>
          </li>
        ))}
      </ul>
    </div>
  );
};