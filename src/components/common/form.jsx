import React, { Component } from 'react'
import Joi from 'joi-browser'
import Input from './input'

class Form extends Component {
  state = { data: {}, errors: {} }

  validate = () => {
    const options = {
      abortEarly: false
    }
    const result = Joi.validate(this.state.data, this.schema, options)
    if (!result.error) return null

    const errors = {}
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message
    }

    return errors
  }

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value } // computed property the name ase third bracket
    const schema = { [name]: this.schema[name] } // take the value of schema's property value
    const { error } = Joi.validate(obj, schema)

    return error ? error.details[0].message : null
  }

  handleSubmit = e => {
    e.preventDefault()
    // const username = this.username.current.value
    const errors = this.validate()
    console.log(errors)
    this.setState({ errors: errors || {} })
    if (errors) return

    this.doSubmit()
  }

  // handleChange = e => {
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors }
    const errorMessage = this.validateProperty(input)
    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]

    const data = { ...this.state.data }
    //   data[e.currentTarget.name] = e.currentTarget.value
    data[input.name] = input.value
    this.setState({ data, errors })
  }

  renderButton = label => {
    return (
      <button disabled={this.validate()} className='btn btn-primary'>
        {label}
      </button>
    )
  }

  renderInput = (name, label, type = 'text') => {
    const { data, errors } = this.state
    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        type={type}
        onChange={this.handleChange}
        error={errors[name]}
      />
    )
  }
}

export default Form
