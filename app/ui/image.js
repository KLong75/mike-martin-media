// Image.tsx

// import NextImage, { getImageProps } from 'next/image';
// import { ComponentProps } from 'react';

// export default function Image(props) {
//   const { props: nextProps } = getImageProps({
//     ...props,
//   });

//   const { style: _omit, ...delegated } = nextProps;

//   return <img {...delegated} />;
// }

// Image.js

import NextImage, { getImageProps } from 'next/image';

export default function Image(props) {
  const { props: nextProps } = getImageProps({
    ...props,
  });

  const { style: _omit, ...delegated } = nextProps;

  return <img {...delegated} />;
}