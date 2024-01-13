export default function TextSegment({ text }) {
  return (
    <div className="flex justify-center items-center">
      <p className="bg-gray-300 shadow-xl p-2 font-semibold text-center border border-2 border-black rounded-2xl text-center w-3/4 md:w-1/2">{text}</p>
    </div>
  );
}