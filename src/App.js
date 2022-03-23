import {createStore} from 'redux';
import allReducers from './Reducers/app';

function App() {

  const store = createStore(allReducers);

//   // store Global state

// // action 
// const increment = () =>{
//   return {
//       type: 'increment'
//   }
// }
// const decrement = () =>{
//   return {
//       type: 'decrement'
//   }
// }

// // reducer
// const counter = (state = 0, action)=>{
//   switch(action.type){
//       case "increment" : 
//       return state + 1;
//       case "decrement" : 
//       return state -1;
//   }
// }
  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
