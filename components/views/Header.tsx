import { Tags } from 'lucide-react'
import React from 'react'

export default function Header() {
  return (
    <header className='w-full'>
        <div className="flex items-center justify-center bg-zinc-900 text-white text-center text-xs py-2">
            <p className='font-semibold'>Discount up to 70% off</p>
            <Tags className='inline-block ml-2 w-4 h-4' />
        </div>

        {/* Navbar */}
        <nav className="py-4 bg-white">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between border border-zinc-200">
                
            </div>
        </nav>
    </header>
  )
}
