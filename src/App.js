import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase'


class App extends Component {
  constructor(){
    super();
    this.state ={
      user: null
    }
    this.handleAuth = this.handleAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user =>{
      this.setState({   user    });//ESP6
    })
  }
  handleAuth (){
  
    var provider = new firebase.auth.GoogleAuthProvider();  
  
    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado secion`))
    .catch(error => console.log( 'Error ' + error.code + ' : ' + error.message ))
  }
  handleLogout(){
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`))    
  }
  renderLoginButton(){
    //si el usuario esta logeado
if(this.state.user){
  return(
    <div>
      <img src={this.state.user.photoURL} alt={this.state.user.displayname}/>
      <h1>Hola {this.state.user.displayName}!</h1>
      <button onClick={this.handleLogout}>SALIR</button>
    </div>
  );
} else {
  return(
  <button onClick={this.handleAuth}> Login con Google</button>
  )
}
    //si no lo esta

  }
  render() {
    return (
      <div className="App">
        {this.renderLoginButton()}
        
      </div>
    );
  }
}

export default App;
