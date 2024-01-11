import Image from "next/image";

export default function DisplayCard({ title, image, text }) {
  return (
    <div className="rounded-xl bg-gray-200 p-2 shadow-sm max-w-96 ">
      <div className="flex p-4">
        <h3 className=" text-sm font-medium">{title}</h3>
      </div>
      <div className="flex justify-center w-24 h-8">
        <Image
          src={image}
          alt={title}
          width={294}
          height={95}
          className="rounded-xl"
        />
      </div>
      <p
        className='rounded-xl bg-white p-4 text-center overflow-wrap break-words m-2'>
        {text}
      </p>
    </div>
  );
}
