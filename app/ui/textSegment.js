export default function TextSegment({ text }) {
  return (
    <div className="flex justify-center items-center">
      <p className="p-2 font-semibold text-center rounded-2xl w-10/12 md:w-1/2">{text}</p>
    </div>
  );
}