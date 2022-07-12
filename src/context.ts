import { createContext } from 'react'

export const Context = createContext<{
  registerField:(field: string | number) => void,
  unregisterField:(field: string | number) => void
    }>(null)
