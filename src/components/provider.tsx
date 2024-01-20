'use client'
import React, { FC } from 'react'
import { SessionProvider } from 'next-auth/react'

interface ProviderProps {
  children: React.ReactNode
}

export const Provider: FC<ProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}
