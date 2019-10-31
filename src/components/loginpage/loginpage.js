import React from 'react';
import Message from '../messageapplication/messageapplication'
import '../messageapplication/messageapplication.css';


const login=()=>{
  return (
      <div className="App">
       <div className="textdesign">
       Email <input type="text"/>
       </div>
       <div className="submitdesign">
       <input type="submit" value="Submit"/>
       {/* <input type="submit" value="Submit"  onClick={this.handleClick}/> */}
       </div>
        </div>
      );
}
export default login; 