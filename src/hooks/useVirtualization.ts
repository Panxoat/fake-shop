'use client';

import useScrollDetect from './useScrollDetect';
import useViewPort from './useViewPort';

interface UseVirtualizationProps {
  itemCount: number;
  itemHeight: number;
}

const useVirtualization = ({
  itemCount,
  itemHeight,
}: UseVirtualizationProps) => {
  const currScroll = useScrollDetect();
  const currViewPortHeight = useViewPort();

  const scrollableHeight = itemCount * itemHeight;
};
