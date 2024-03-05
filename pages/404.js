import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function FourZeroFour() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return (
    <div className='bg-black text-white'>
      404 - page not found
      Redirecting...
    </div>
  )
}