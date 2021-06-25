import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import LoginComponent from './components/LoginComponent';
// import SignUpComponent from './components/SignUpComponent';
import {autoLogin, Logout} from './actions/userActions'


class App extends React.Component{

  componentDidMount(){
    this.props.autoLogin()
  }

  render(){
    return (
      <div className="App">
            {
              !this.props.userReducer.loggedIn ? <h1>Login!</h1> : <h1>Welcome, {this.props.userReducer.user.username}</h1>
            }
           {/* <SignUpComponent/> */}
           {!this.props.userReducer.loggedIn && <LoginComponent/>}
           {this.props.userReducer.loggedIn && <button onClick={()=>this.props.Logout()}>Logout</button>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin()),
    Logout: () => dispatch(Logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
