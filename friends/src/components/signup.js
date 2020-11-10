import React from 'react';
import { axiosWithAuth } from '../imports/axiosWithAuth';

class SignupForm extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      age: 0,
      password: "",
      email: "",
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.signup = this.signup.bind(this);
  }

  changeHandler(e) {
    switch (e.target.name) {
      case "username": 
        this.setState({...this.state, username: e.target.value});
        break;
      case "age":
        this.setState({...this.state, age: e.target.value});
        break;
      case "email":
        this.setState({...this.state, email: e.target.value});
        break;
      case "password":
        this.setState({...this.state, password: e.target.value});
        break;
      default: return this.state;
    }
  }

  signup(e) {
    e.preventDefault();
    axiosWithAuth().post('http://localhost:5000').then(res => {console.log(res)})
  }

  render() {
    return (
      <form onSubmit={this.signup}>
        <h3>Signup Form</h3>
        <label htmlFor='username'>Username:</label>
        <input 
          name='username'
          id='username'
          type='text'
          value={this.state.name}
          onChange={this.changeHandler}
        />

        <label htmlFor='password'>Password:</label>
        <input 
          name='password'
          id='password'
          type='text'
          value={this.state.password}
          onChange={this.changeHandler}
        />

        <label htmlFor='age'>Age:</label>
        <input 
          name='age'
          id='age'
          type='number'
          value={this.state.age}
          onChange={this.changeHandler}
        />

        <label htmlFor='email'>Email:</label>
        <input 
          name='email'
          id='email'
          type='email'
          value={this.state.email}
          onChange={this.changeHandler}
        />

        <button>Submit</button>
      </form>
    )
  };
};

export default SignupForm;