import React from 'react'
// const Input = props => {
// const Input = ({ name, label, value, error, onChange, type }) => {
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      {/* <input
        autoFocus
        id={name}
        type={type}
        className='form-control'
        name={name}
        value={value}
        onChange={onChange}
      /> */}

      <input
        {...rest}
        autoFocus
        id={name}
        className='form-control'
        name={name}
      />
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  )
}

export default Input
