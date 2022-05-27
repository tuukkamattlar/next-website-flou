import { useState } from 'react';
import useWindowSize from './hooks/useWindowSize';

export default function HomeAnimation({ src, className }) {
  const size = useWindowSize();

  const heightFactor = size.height > 750 ? -(1 + (10 * (size.height - 750)) / 750) * 5 : 1;

  const right = Math.min(0.00000005 * Math.pow(size.width - 2000, 3) + heightFactor, 0);

  if (size.width >= 750) {
    return (
      <iframe
        style={{
          height: '100vh',
          width: '100vw',
          padding: '0px',
          bottom: '0px',
          border: '0',
        }}
        src={src}
      />
    );
  }

  return '';
}
