import React from 'react';

class Friend extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.friend.name}
        {this.props.friend.email}
      </div>
    )
  };
};

export default Friend;