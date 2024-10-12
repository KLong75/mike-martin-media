import { usePathname } from 'next/navigation';

export default function Head() {
  const pathname = usePathname();
  const canonicalUrl = `https://mikemartinmedia.com${pathname}`;

  return (
    <>
      <link rel="canonical" href={canonicalUrl} />
    </>
  );
}