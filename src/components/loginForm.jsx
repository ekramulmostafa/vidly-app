import React from 'react'
// import Input from './common/input'
import Joi from 'joi-browser'
import Form from './common/form'

class LoginForm extends Form {
  username = React.createRef()

  //   componentDidMount () {
  //     this.username.current.focus()
  //   }
  state = {
    data: {
      username: '',
      password: ''
    },
    errors: {}
  }

  schema = {
    username: Joi.string()
      .required()
      .label('Username'),
    password: Joi.string()
      .required()
      .label('Password')
  }

  doSubmit = () => {
    console.log('submited')
  }

  render () {
    // const { data, errors } = this.state
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {/* <Input
            name='username'
            value={data.username}
            label='username'
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name='password'
            value={data.password}
            label='password'
            onChange={this.handleChange}
            error={errors.password}
          /> */}
          {/* <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              className='form-control'
              name='password'
              value={data.password}
              onChange={this.handleChange}
            />
          </div> */}
          {this.renderButton('Login')}
        </form>
      </div>
    )
  }
}

export default LoginForm
