import React, { Component } from 'react';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (e) => {
    // destructure the value and the name from the event object
    const { value, name } = e.target;

    // set the state by using bracket object notation to pass the name of the input
    // changing the value - this prevents having to rewrite the same kind of function
    // multiple times
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          ></input>
          <label>Email</label>
          <input
            name='password'
            type='password'
            value={this.state.email}
            onChange={this.handleChange}
            required
          ></input>
          <label>Password</label>
          <input type='submit' value='Submit Form'></input>
        </form>
      </div>
    );
  }
}

export default SignIn;
