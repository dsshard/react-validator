import { createContext } from 'react'

import { Validity } from './types'

export const Context = createContext<{
  registerField: (field: string | number) => void
  unregisterField: (field: string | number) => void
  customErrors: Array<Validity>
}>(null)
