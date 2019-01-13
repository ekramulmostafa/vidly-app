import React, { Component } from 'react'
// const Input = props => {
const Input = ({ name, label, value, onChange }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        id={name}
        type='text'
        className='form-control'
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
