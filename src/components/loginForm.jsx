import React, { Component } from 'react'
import Input from './common/input'
class LoginForm extends Component {
  username = React.createRef()

  //   componentDidMount () {
  //     this.username.current.focus()
  //   }
  state = {
    account: {
      username: '',
      password: ''
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    const username = this.username.current.value
    console.log('Submitted = ' + username)
  }
  // handleChange = e => {
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account }
    //   account[e.currentTarget.name] = e.currentTarget.value
    account[input.name] = input.value
    this.setState({ account })
  }

  render () {
    const { account } = this.state
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='username'
            value={account.username}
            label='username'
            onChange={this.handleChange}
          />
          <Input
            name='password'
            value={account.password}
            label='password'
            onChange={this.handleChange}
          />
          {/* <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              className='form-control'
              name='password'
              value={account.password}
              onChange={this.handleChange}
            />
          </div> */}
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm
