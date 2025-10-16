//import components
// import Image from "next/image";
import GridPic from "./gridPic";
// import from next
// import Link from "next/link";
// import data
import { gridPics } from "../lib/gridPics";

export default function FourPicGrid() {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-2 w-full h-full">
        {gridPics.map((gridPic) => (
          <GridPic
            key={gridPic.label}
            label={gridPic.label}
            href={gridPic.href}
            alt={gridPic.alt}
            src={gridPic.src}
            width={gridPic.width}
            height={gridPic.height}
            priority={gridPic.priority}
          />
        ))}
      </div>
    </div>
  );
}

// //import components
// import Image from "next/image";
// import GridPic from "./gridPic";
// // import from next
// import Link from "next/link";
// // import data
// import { gridPics } from "../lib/gridPics";

// export default function FourPicGrid({
//   src_one,
//   src_two,
//   src_three,
//   src_four,
//   href_one,
//   href_two,
//   href_three,
//   href_four,
//   label_one,
//   label_two,
//   label_three,
//   label_four,
//   width,
//   height,
//   priority,
// }) {
//   return (
//     <div className="flex justify-center w-full">
//       <div className="grid grid-cols-2 w-full h-full">
//         <div className="relative w-full h-full overflow-hidden">
//           <Link href={href_one}>
//             <Image
//               alt="Corporate Video Production"
//               src={src_one}
//               width={width}
//               height={height}
//               priority={priority}
//               className="w-full h-full object-cover transform transition-transform duration-2000 hover:scale-125 ease-in-out"
//             />
//           </Link>
//           <div className="capability-label text-2xl font-bold text-shadow absolute bottom-[6rem] left-[-1rem] z-50 text-white hover:bg-black transform -rotate-90">
//             <span>{label_one}</span>
//           </div>
//         </div>
//         <div className="relative w-full h-full overflow-hidden">
//           <Link href={href_two}>
//             <Image
//               alt="Education Video Production"
//               src={src_two}
//               width={width}
//               height={height}
//               priority={priority}
//               className="w-full h-full object-cover transform transition-transform duration-2000 hover:scale-125"
//             />
//           </Link>
//           <div className="capability-label text-2xl font-bold text-shadow absolute bottom-[6rem] left-[-1rem] z-50 text-white hover:bg-black bg-opacity-50  transform -rotate-90">
//             {label_two}
//           </div>
//         </div>
//         <div className="relative w-full h-full overflow-hidden">
//           <Link href={href_three}>
//             <Image
//               alt="Healthcare Video Production"
//               src={src_three}
//               width={width}
//               height={height}
//               priority={priority}
//               className="w-full h-full object-cover transform transition-transform duration-2000 hover:scale-125"
//             />
//           </Link>
//           <div className="capability-label text-2xl font-bold text-shadow absolute bottom-[6rem] left-[-1rem] z-50 text-white hover:bg-black bg-opacity-50  transform -rotate-90">
//             {label_three}
//           </div>
//         </div>
//         <div className="relative w-full h-full overflow-hidden">
//           <Link href={href_four}>
//             <Image
//               alt="Nonprofit Video Production"
//               src={src_four}
//               width={width}
//               height={height}
//               priority={priority}
//               className="w-full h-full object-cover transform transition-transform duration-2000 hover:scale-125"
//             />
//           </Link>
//           <div className="capability-label text-2xl font-bold text-shadow absolute bottom-[6rem] left-[-1rem] z-50 text-white hover:bg-black bg-opacity-50  transform -rotate-90">
//             {label_four}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import components
// import Image from "next/image";
// import from next
// import Link from "next/link";

// export default function FourPicGrid({
//   src_one,
//   src_two,
//   src_three,
//   src_four,
//   href_one,
//   href_two,
//   href_three,
//   href_four,
//   width,
//   height,
//   priority,
// }) {
//   return (
//     <div className="flex justify-center ">
//       <div className="grid grid-cols-2 w-full h-full max-w-[1728px]">
//         <div className="w-full h-full overflow-hidden">
//           <Link href={href_one}>
//             <Image
//               src={src_one}
//               width={width}
//               height={height}
//               priority={priority}
//               className="transform transition-transform duration-2000 hover:scale-125 ease-in-out"
//             />
//           </Link>
//         </div>
//         <div className="w-full h-full overflow-hidden">
//           <Link href={href_two}>
//             <Image
//               src={src_two}
//               width={width}
//               height={height}
//               priority={priority}
//               className="transform transition-transform duration-2000 hover:scale-125 "
//             />
//           </Link>
//         </div>
//         <div className="w-full h-full overflow-hidden">
//           <Link href={href_three}>
//             <Image
//               src={src_three}
//               width={width}
//               height={height}
//               priority={priority}
//               className="transform transition-transform duration-2000 hover:scale-125"
//             />
//           </Link>
//         </div>
//         <div className="w-full h-full overflow-hidden">
//           <Link href={href_four}>
//             <Image
//               src={src_four}
//               width={width}
//               height={height}
//               priority={priority}
//               className="transform transition-transform duration-2000 hover:scale-125"
//             />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
