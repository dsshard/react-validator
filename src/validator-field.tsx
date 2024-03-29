import { Component, ReactNode } from 'react'
import { Validity } from 'types'

import { Context } from './context'
import { Field } from './validator'
import { ValidatorRules } from './rules'

export type Value = any

type Fn = (validity: Validity, value: Value) => ReactNode

interface Props {
  rules?: ValidatorRules
  required?: boolean
  value?: Value
  id?: string | number
  children?: ReactNode | Fn
  unregisterField: (val: any) => void
  registerField: (val: any) => void
  customErrors: Array<Validity>
}

class ValidationFieldWrapper extends Component<Props> {
  componentWillUnmount() {
    this.props.unregisterField(this)
  }

  componentDidMount() {
    this.props.registerField(this)
  }

  validate(): Validity {
    const props = this.props
    const customError = props.customErrors.find((item) => item.id === props.id)
    if (customError) {
      return customError
    }

    const field = new Field({
      rules: props.rules,
      required: props.required,
      value: props.value,
      id: props.id,
    })
    return field.validate()
  }

  render() {
    const { children, value } = this.props
    const validity = this.validate()
    return typeof children === 'function' ? children(validity, value) : children
  }
}

export function ValidatorField(props: Omit<Props, 'registerField' | 'unregisterField' | 'customErrors'>) {
  return (
    <Context.Consumer>
      {(data) => (
        <ValidationFieldWrapper
          {...props}
          customErrors={data.customErrors}
          registerField={data.registerField}
          unregisterField={data.unregisterField}
        />
      )}
    </Context.Consumer>
  )
}
