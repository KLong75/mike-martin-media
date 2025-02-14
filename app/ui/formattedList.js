export default function FormattedList({ heading, sub_heading, list_items }) {
  return (
    <div className="lg:m-6">
      <h6 className="font-bold text-xl lg:text-2xl xl:text-4xl">{heading}</h6>
      <p className="font-semibold text-sm lg:text-lg mb-4">{sub_heading}</p>
      {/* <ul className="list-disc sm:text-lg ml-6">
        {list_items.map((item, index) => {
          const [boldText, ...restText] = item.split(":");
          return (
            <li key={index} className="">
              <strong>{boldText}:</strong> {restText.join(":")}
            </li>
          );
        })}
      </ul> */}
      <ul className="list-disc sm:text-lg ml-6">
        {list_items.map((item, index) => {
          {/* const [boldText, ...restText] = item.split(":"); */}
          return (
            <li key={index} className="">
              <strong>{item.label}</strong> {item.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
