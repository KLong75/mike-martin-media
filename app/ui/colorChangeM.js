// import from next
// import Image from "next/image";
import Image from "./image";

export default function ColorChangeM({ src }) {
  return (
    <Image
      src={src}
      width={349}
      height={271}
      alt="company logo"
      priority={true}
    />
  );
}
