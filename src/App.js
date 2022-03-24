import { useSelector, useDispatch } from 'react-redux';
import {increment , decrement} from './Actions'

function App() {

  const counter = useSelector(state=> state.counter);
  const isLogged = useSelector(state=>state.signIn);

  const dispatch = useDispatch();
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
     <h2>counter: {counter}</h2>
     <button onClick={()=> dispatch(increment())}>+</button>
     <button onClick={()=> dispatch(decrement())}>-</button>
     {isLogged && <h3>you can't see this if you are not logged in</h3>}
    </div>
  );
}

export default App;
