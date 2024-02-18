export default function SubmitButtonWithPlaneAnimation( { isSubmitted } ) {

  return (
    <div className="flex  m-auto p-8 justify-center items-center">
      <button
        type="submit"
        disabled={isSubmitted}
        className={`hover:transform hover:scale-110 transition-transform w-44 relative flex items-center justify-center gap-x-2.5 rounded-full px-6 py-2.5 font-bold transition-all duration-300 ${
          isSubmitted
            ? "bg-green-500 text-black"
            : "bg-black text-white  hover:shadow-lg"
        }`}>
        <span>
          {isSubmitted ? "Thank you!" : "Send"}
        </span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isSubmitted ? "svg-animate" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1792 1792"
          style={{
            transformOrigin: "top left",
            transformStyle: "preserve-3d",
          }}>
          <path
            fill="currentColor"
            d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45q-14 8-31 8q-11 0-24-5l-453-185l-242 295q-18 23-49 23q-13 0-22-4q-19-7-30.5-23.5T640 1728v-349l864-1059l-1069 925l-395-162q-37-14-40-55q-2-40 32-59L1696 9q15-9 32-9q20 0 36 11"
          />
        </svg>
        <svg
          className={`w-5 h-5 text-white absolute right-5 transition-all duration-700 delay-700 ${
            isSubmitted ? "scale-100" : "scale-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256">
          <path
            fill="currentColor"
            d="m232.49 80.49l-128 128a12 12 0 0 1-17 0l-56-56a12 12 0 1 1 17-17L96 183L215.51 63.51a12 12 0 0 1 17 17Z"
          />
        </svg>
      </button>
    </div>
  );
}