import { useState } from 'react';
import useWindowSize from './hooks/useWindowSize';

export default function HomeSvg({ src, className }) {
  const size = useWindowSize();

  const heightFactor = size.height > 750 ? -(1 + 10*(size.height - 750)/750)*5 : 1

  const right = Math.min(0.00000005 * Math.pow(size.width - 2000, 3) + heightFactor, 0);

  console.log(size.height);
  console.log(size.width);
  console.log(`${right}%`);

  return (
    <img
      style={{
        padding: '0px',
        backgroundSize: 'contain',
        backgroundPosition: 'bottom',
        height: 1 * size.height,
        position: 'absolute',
        padding: '0px',
        bottom: '0px',
        right: `${right}%`
      }}
      src={src}
    />
  );
}
