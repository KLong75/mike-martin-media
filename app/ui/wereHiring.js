// import components
import Image from "next/image";

export default function WereHiring() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="flex flex-col justify-center p-12 items-center">
        <p className="text-center text-xl 2xl:text-2xl p-2">We are hiring! </p>
        <a
          href="https://www.ziprecruiter.com/job/508a37ad"
          target="_blank"
          rel="noopener noreferrer">
          <div className="flex flex-col justify-center items-center">
            <Image
              className="w-3/5 lg:w-9/12 rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
              src="https://www.ziprecruiter.com/assets/static/img/badge-hiring-2-300px.png"
              alt="Company logo"
              width={300}
              height={240}
            />
          </div>
        </a>
        <p className="text-center text-xl 2xl:text-2xl p-2">
          {" "}
          Apply on ZipRecruiter
        </p>
      </div>
    </div>
  );
}
