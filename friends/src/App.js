import React from 'react';
// import './App.css';
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import LoginForm from './components/login';
import SignupForm from './components/signup';
import Dashboard from './components/dashboard';
  
const PrivateRoute = ({component: Component, ...rest}) => {
  return (<Route 
    {...rest}
    render={props => {
      let token = localStorage.getItem('token')
      // console.log("token", token)
      if (token) {
        return <Component {...props} />
      } else {
         return <Redirect to='/' />
      }
    }
  }
  />);
};

class App extends React.Component {
  constructor() {
    super()
  }  
  
  componentDidMount() {
    localStorage.clear();
  }

  render() {
     return (
    <div className="App">
      <header className="App-header">
        FriendList
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/protected'>Friends</Link>
        </nav>
      </header>
      <Switch> 
        <PrivateRoute path='/protected' component={Dashboard} />
        <Route path='/'>
          <LoginForm />
        </Route>
     
      </Switch>
    </div>
  )};
};

export default App;
