'use client'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'

const AnimatePresenceProvider = ({children}) => {
    const pathName = usePathname()
  return (
    <AnimatePresence  mode="wait">
        {children}
    </AnimatePresence>
  )
}

export default AnimatePresenceProvider