// // function App(){

//   function displayMessage(num,){
    
//     alert("num,")
//   }
//   return(
//     <button onClick={displayMessage}>Click</button>

//   )
// }


// import React from "react"
// function App(){
//   let counter = 0
//     return(
//       <>
//           <h1>Counter Value :{counter}</h1>
//           <button onClick={updateCounter}>Change</button>
          
//       </>
//     )
//       function updateCounter(){
//         ++counter;
//         console.log(counter)
//       }
    
// }

// this is functonal component
// import React, { useState } from "react";
// function App(){
//   let [counter, updateCounter] = useState(0)
//   return(
//     <>
//         <h1>Counter Value : {counter}</h1>
//         <button onClick={()=>{
//               updateCounter(++counter)
//         }}> Change</button>
//     </>
//   )
// }

// this is class component using state
// import React from "react"
// class App extends React.Component {
//   state = {
//     counter: 0
//   }
//   render(){
//     return(

//         <>
//               <h1>Counter Value:{this.state.counter}</h1>
//               <button onClick={()=>{
//                 this.setState({
//                   counter: this.state.counter +1
//                 })
//               }}>Change</button>
//         </>
//     )
//   }
// }


// this is background color change file.
// import './App.css' 


// function App(){
//   return(
//     <div className='wrapper'>
//         <h1>Back ground color changer</h1>
//         <input type='color'onChange={
//           (event)=>{
//            document.body.style.background = event.target.value
//           }
//         }/>
      
//       </div>
//   )
// }


// import { useState } from 'react'
// import './App.css'

// function App() {

//   let [counter,setCounter] = useState(0)


//   let stock = 10;

//   return (

//     <div className="Wrapper">
//       <button className='minus'disabled={counter ===0} onClick={()=>{
//         if(counter>0){
//           setCounter(counter-1)
//         }
//       }}>-</button>
//       <p>0</p>
//       <button className='plus'disabled={counter===stock} onClick={()=>{
//         if(counter < stock){
//           setCounter(counter+1)
//         }
//       }}>+</button>
//       </div>
//   )
// }
// export default App 

// import Product from "./product";


// function App(){

//   let prod1 = {
//     id:1,
//     name: "Lenovo Think Pad",
//     aprice: 120000,
//     dprice: 100000,
//   }
//   return(
//   //  <Product id={prod1.id} name={prod1.name} aprice={prod1.aprice} dprice={prod1.dprice}
//    // />
//    <Product {...prod1}/> // this is object spread.
//   )
// }



export default App