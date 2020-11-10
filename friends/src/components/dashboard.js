import React from 'react';
import { axiosWithAuth } from '../imports/axiosWithAuth';
import Friend from './friend';
import AddFriend from './addFriend';

class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: [],
    }
    this.updateState = this.updateState.bind(this);
  }

  
  updateState(res) {
    this.setState({...this.state, friends: res});
  }

  componentDidMount() {
    axiosWithAuth().get('http://localhost:5000/api/friends')
      .then(res => {
        this.setState({...this.state, friends: res.data})
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.friends ? this.state.friends.map((el,idx) => {
          return <Friend key={idx} friend={el} />
        })
        :
        "loading"
      }
      <AddFriend setFriends={this.updateState}/>
      </div>

    )
  };
};

export default Dashboard;