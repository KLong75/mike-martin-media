import Link from "next/link";

export default function SubNavMenu({subMenu}) {
  return (
    <div className="">
      <ul className="flex flex-row w-full space-x-8 justify-center">
        {subMenu.map((item, index) => (
          <li key={index} className="py-2">
            <Link href={item.href}>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}