import React from 'react';
import { axiosWithAuth } from '../imports/axiosWithAuth';
import {withRouter} from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: "",
      isLoading: false,
      username: "",
      password: "",
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.login = this.login.bind(this);
  }
  changeHandler(e) {
    switch (e.target.name) {
      case "username": 
        this.setState({...this.state, username: e.target.value});
        break;
      case "password":
        this.setState({...this.state, password: e.target.value});
        break;
      default: return this.state;
    }
  }
  login(e) {
    e.preventDefault();
    this.setState({...this.state, isLoading: true});
    axiosWithAuth().post('http://localhost:5000/api/login', {username: this.state.username, password: this.state.password}).then(res => {
      localStorage.setItem('token', res.data.payload);
      this.setState({...this.state, isLoading: false});
      this.props.history.push('/protected');
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <form onSubmit={this.login}>
        {/* {this.state.error && this.state.error} */}
        <h3>Login Form</h3>
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

        <button>{this.state.isLoading ? "Loading" : "Submit"}</button>
      </form>
    )
  };
};

export default withRouter(LoginForm);