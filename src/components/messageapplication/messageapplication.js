import React from 'react';
import download from '../../assets/download.png';

const message=()=>{
    return(
        <div className="App">
          <div id="container">
            <aside id="sidebar" class="sidebar">  
            <div className="se">Users</div>
      
            <div><button className="si"><img src={download} width="25px" height="25px"/> Amelia</button></div>
            <div><button className="si"><img src={download} width="25px" height="25px"/> Harper</button></div>
            <div><button className="si"><img src={download} width="25px" height="25px"/> Clarie</button></div>
            <div><button className="si"><img src={download} width="25px" height="25px"/> Evelyn</button></div>
            <div><button className="si"><img src={download} width="25px" height="25px"/> Briony</button></div>
            <div><button className="si"><img src={download} width="25px" height="25px"/> Elowen</button></div>
            <div><button className="si"><img src={download} width="25px" height="25px"/> Verity</button></div>
            <div><button className="si"><img src={download} width="25px" height="25px"/> Aditya</button></div>
            <div><button className="si"><img src={download} width="25px" height="25px"/> Adline</button></div>
            <div><button className="si"><img src={download} width="25px" height="25px"/> Sophia</button></div>
     
          </aside>
         
            <section id="main">
              <section id="message-list">User Name</section>
              <section id="new-message">
                <div className="text">
                  <input type="text" />
                <input type="submit" value="Send" />
                </div>
              </section>
            </section>
          </div>
        </div>
      );  
}
export default message;