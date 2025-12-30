import Header from '@/components/views/Header'
import React from 'react'

export default function HomeProvider({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-screen bg-white'>
      <Header />
        {children}
    </main>
  )
}
