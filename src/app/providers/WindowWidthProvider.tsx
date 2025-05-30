'use client'
import { createContext, useContext, ReactNode } from 'react'
import useWindowWidth from '../hooks/useWindowWidth'

type WindowWidthContextType = ReturnType<typeof useWindowWidth>

const WindowWidthContext = createContext<WindowWidthContextType | undefined>(undefined)

export const useWindowWidthContext = () => {
  const context = useContext(WindowWidthContext)
  if (context === undefined) {
    throw new Error('useWindowWidthContext must be used within a WindowWidthProvider')
  }
  return context
}

interface WindowWidthProviderProps {
  children: ReactNode
}

export const WindowWidthProvider = ({ children }: WindowWidthProviderProps) => {
  const windowWidthData = useWindowWidth()

  return <WindowWidthContext.Provider value={windowWidthData}>{children}</WindowWidthContext.Provider>
}
