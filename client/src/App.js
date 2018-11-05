import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {

   super()
   this.state = {
       password: 'init',
       joo:'jee',
       vallue:'jojo',

     };
     this.handleChange = this.handleChange.bind(this);
 }








  componentDidMount() {
     console.log('ComponenDidMount')
     this.callApi()
       .then(res => {//console.log('password '+res[0].password)
       this.setState({ password: res[0].login });
     console.log(res); //EI TOIMI EI TOIMI
   })
       .catch(err => console.log(err));
   }

   callApi = async () => {
     const response = await fetch('/users');
     const body = await response.json();

     if (response.status !== 200) throw Error(body.message);
     console.log(body)
     return body;
   };
   handleChange(event) {
   this.setState({value: event.target.vallue});
 }



  render() {
    return (
      <div  >

          <p>
            REACT
            User {this.state.password}
          </p>

      </div>
    );
  }
}

export default App;
