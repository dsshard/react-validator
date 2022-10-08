import { Component, ReactNode, RefObject } from 'react'

import { Context } from './context'
import { Validator } from './validator'

interface ComponentProps {
  children?: ReactNode
  stopAtFirstError?: boolean
  ref?: RefObject<any>
}

export class ValidatorWrapper extends Component<ComponentProps> {
  fields = []

  constructor (props, ctx) {
    super(props, ctx)
    this.registerField = this.registerField.bind(this)
    this.unregisterField = this.unregisterField.bind(this)
  }

  componentWillUnmount () {
    this.fields = []
  }

  registerField (field) {
    if (field && !this.fields.includes(field)) {
      this.fields.push(field)
    }
  }

  unregisterField (field) {
    const index = this.fields.indexOf(field)
    if (index > -1) this.fields.splice(index, 1)
  }

  getField (id) {
    return this.fields.find((field) => field.props.id === id) || null
  }

  validate () {
    const validator = new Validator({ stopAtFirstError: this.props.stopAtFirstError })
    this.fields.forEach((comp) => {
      validator.addField(comp.props)
    })
    return validator.validate()
  }

  render () {
    return (
      <Context.Provider
        value={{ registerField: this.registerField, unregisterField: this.unregisterField }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}
