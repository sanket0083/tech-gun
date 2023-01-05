// import React , {useEffect , useState} from 'react'
// import { ReactDOM } from 'react';

 //COUNTER

// const App = () => {

//   const [count ,setcount] = useState(0);

//   useEffect( ()=>{

//   },[])
  
//   const inc = ()=>{
//     setcount(count+1);

//   }
//   const dec = () => {
//     if(count > 0) {
//       setcount(count - 1);
//     }
//   }
//   return (
//     <div>
//       {count} 
//       <button onClick={inc}>+</button> 
//       <button onClick={dec}>-</button>
//     </div>
//   )
// }

// export default App


// TIMER

// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';

// function App() {
  //function baseComponent

//   let time = new Date().toLocaleTimeString();
//   const [ctime, settime] = useState(time);

//   const updatetime = () => {
//     time = new Date().toLocaleTimeString();
//     settime(time);

//   }
//   useEffect(() => {
//     setInterval(updatetime, 1000);
//   }, []);

//   return (
//     <div>
//       <h2>{ctime}</h2>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
        this.state = {
          
        };
      }
      componentDidMount(){
        setInterval(() => {
            this.setState({ data : new Date().toLocaleTimeString() });
        },1000);
        

      }
    
  render() {
    return (
      <div>
        {this.state.data} 
      </div>
    )
  }
}
