import React, { Component } from 'react';
import logo from './logo.svg';
import Login from '../src/components/loginpage/loginpage';
import '../src/components/loginpage/loginpage.css';
import Message from '../src/components/messageapplication/messageapplication';
import  '../src/components/messageapplication/messageapplication.css'

// const Messages=(props)=>{
//   if(props.value){
//     return <Login/>
//   }
//   return <Message/>
// }
class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={value:true}
  // }
  // handleClick=()=>{
  //   this.setState({
  //     value:!this.state.value 
  //   })
  // }
  render() {
    return (
      <div>
        <Login/>
        {/* <Message/> */}
      
        {/* <div className="textdesign">
       Email <input type="text"/>
       </div>
       <div className="submitdesign">
       <input type="submit" value="Submit"  onClick={this.hanadleClick}/>
       </div> }
    <Messages value={this.state.value}/> */}
    </div>
    )
  }
}

export default App;
