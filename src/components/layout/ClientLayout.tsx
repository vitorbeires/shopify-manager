'use client';

import { SessionProvider } from 'next-auth/react';
import { StoreProvider } from '@/contexts/StoreContext';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <StoreProvider>
        {children}
      </StoreProvider>
    </SessionProvider>
  );
} 