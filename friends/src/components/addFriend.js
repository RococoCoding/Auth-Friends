
import React from 'react';
import {axiosWithAuth} from '../imports/axiosWithAuth';
const initialState = {
  name: "",
  age: 0,
  email: ""
}
class AddFriendForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState;
    this.changeHandler = this.changeHandler.bind(this);
    this.addFriends = this.addFriends.bind(this);
  }
  changeHandler(e) {
    switch (e.target.name) {
      case "name": 
        this.setState({...this.state, name: e.target.value});
        break;
      case "age":
        this.setState({...this.state, age: e.target.value});
        break;
      case "email":
        this.setState({...this.state, email: e.target.value});
        break;
    
      default: return this.state;
    }
  }

  addFriends(e) {
    e.preventDefault();
    axiosWithAuth().post('http://localhost:5000/api/friends', this.state)
      .then(res => this.props.setFriends(res.data))
      .catch(err => console.log(err));
    this.setState(initialState)
  }


  render() {
    return (
      <form onSubmit={this.addFriends}>
        <label htmlFor="name">Name:</label>
        <input 
          name="name"
          id="name"
          type="text"
          value={this.state.name}
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

export default AddFriendForm;