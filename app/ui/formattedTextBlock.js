export default function FormattedTextBlock({ heading, sub_heading, text }) {
  return (
    <div>
      <h6 className="font-bold text-xl lg:text-2xl xl:text-4xl mb-4 lg:mb-8">
        {heading}
      </h6>
      <p className="font-semibold sm:text-lg">{sub_heading}</p>
      <p className="sm:text-lg">{text}</p>
    </div>
  );
}
