import Link from "next/link";

export default function FormattedList({
  heading,
  heading_level,
  sub_heading,
  list_items,
}) {
  return (
    <div className="lg:m-6">
      {/* <h6 className="font-bold text-xl lg:text-2xl xl:text-4xl">{heading}</h6> */}
      {/* use heading level prop to set h */}
      {heading_level === "h1" && (
        <h1 className="font-bold text-xl lg:text-2xl xl:text-4xl">{heading}</h1>
      )}
      {heading_level === "h2" && (
        <h2 className="font-bold text-xl lg:text-2xl xl:text-4xl">{heading}</h2>
      )}
      {heading_level === "h3" && (
        <h3 className="font-bold text-xl lg:text-2xl xl:text-4xl">{heading}</h3>
      )}
      {heading_level === "h4" && (
        <h4 className="font-bold text-xl lg:text-2xl xl:text-4xl">{heading}</h4>
      )}
      {heading_level === "h5" && (
        <h5 className="font-bold text-xl lg:text-2xl xl:text-4xl">{heading}</h5>
      )}
      {heading_level === "h6" && (
        <h6 className="font-bold text-xl lg:text-2xl xl:text-4xl">{heading}</h6>
      )}
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
          {
            /* const [boldText, ...restText] = item.split(":"); */
          }
          return (
            <li key={index} className="">
              {item.href ? (
                <Link href={item.href} className="font-bold underline">
                  {item.label}
                </Link>
              ) : (
                <strong>{item.label}</strong>
              )}{" "}
              {item.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
