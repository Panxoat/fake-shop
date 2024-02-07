'use client';

import { useState } from 'react';
import clsx from 'classnames';

import Image from 'next/image';
import { OnLoadingComplete } from 'next/dist/shared/lib/get-img-props';

interface ImageComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  quality?: number;
  priority?: boolean | undefined;
  loading?: 'eager' | 'lazy' | undefined;
  blurDataURL?: string | undefined;
  unoptimized?: boolean | undefined;
  onLoadingComplete?: OnLoadingComplete | undefined;
  layout?: string | undefined;
  objectFit?: string | undefined;
  objectPosition?: string | undefined;
  lazyBoundary?: string | undefined;
  lazyRoot?: string | undefined;
}

export const ImageComponent = (props: ImageComponentProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div
        className={clsx('relative w-[200px] h-[200px]', {
          'animate-pulse': !!isLoading,
        })}
      >
        <Image
          {...props}
          fill
          priority
          sizes="100"
          onLoad={() => {
            setIsLoading(false);
          }}
        />
      </div>
    </>
  );
};