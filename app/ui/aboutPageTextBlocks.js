// import text data
import { weTextBlockData } from "../lib/data";

export default function AboutPageTextBlocks() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center p-12 -mb-12 lg:-mb-0">
          {weTextBlockData.map((block) => (
            <div key={block.title} className="shadow-2xl">
              <h4 className="font-bold mr-auto p-4 -mb-4">{block.headline}</h4>
              <p className="text-left  w-full p-4">{block.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div> 
  );
}
