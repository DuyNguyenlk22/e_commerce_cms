'use client';

import { StoreModals } from '@/components/store-modals/store-modals';

import { useEffect, useRef, useState } from 'react';

export const ModalProvider = () => {
  const mountRef = useRef(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    mountRef.current = true;
    setIsMounted(mountRef.current);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModals />
    </>
  );
};
