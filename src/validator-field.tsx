import { Component, ReactNode } from 'react'

import { Context } from './context'
import { Field } from './validator'
import { ValidatorRules } from './rules'

export type Value = any

export interface ErrorMessage {
  message: string
  isValid: boolean
}

export interface Validity {
  message: string
  isValid: boolean
  errors?: ErrorMessage[]
  id?: string | number
}

type Fn = (validity: Validity, value: Value) => ReactNode

interface Props {
  rules?: ValidatorRules,
  required?: boolean,
  value?: Value
  id?: string | number
  children?: ReactNode | Fn
  unregisterField: (val: any) => void
  registerField: (val: any) => void
}

class ValidationFieldWrapper extends Component<Props> {
  componentWillUnmount () {
    this.props.unregisterField(this)
  }

  componentDidMount () {
    this.props.registerField(this)
  }

  validate (): Validity {
    const field = new Field({
      rules: this.props.rules,
      required: this.props.required,
      value: this.props.value,
      id: this.props.id
    })
    return field.validate()
  }

  render () {
    const { children, value } = this.props
    const validity = this.validate()
    return (typeof children === 'function' ? children(validity, value) : children)
  }
}

export function ValidatorField (props: Omit<Props, 'registerField' | 'unregisterField'>) {
  return (
    <Context.Consumer>
      {(data) => (
        <ValidationFieldWrapper
          {...props}
          registerField={data.registerField}
          unregisterField={data.unregisterField}
        />
      )}
    </Context.Consumer>
  )
}
