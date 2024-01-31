export default function TextSegment({ text }) {
  return (
    <div className="flex justify-center items-center">
      <p className="p-2 font-semibold text-center text-pretty text-balance text-wrap w-10/12 md:w-1/2">{text}</p>
    </div>
  );
}