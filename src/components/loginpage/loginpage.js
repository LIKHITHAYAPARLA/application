import React from 'react';  
import '../messageapplication/messageapplication.css';


const login=()=>{
  return (
      <div className="App">
       <div className="textdesign">
       <input type="text"  id="ko"placeholder="Enter Name"/>
       </div>
       <div className="submitdesign">
       <input type="submit"id="po" value="Submit"/>
       {/* <input type="submit" value="Submit"  onClick={this.handleClick}/> */}
       </div>
        </div>
      );
}
export default login; 