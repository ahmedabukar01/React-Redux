import {createStore} from 'redux';

function App() {

  // store Global state

// action 
const increment = () =>{
  return {
      type: 'increment'
  }
}
const decrement = () =>{
  return {
      type: 'decrement'
  }
}

// reducer
const counter = (state = 0, action)=>{
  switch(action.type){
      case "increment" : 
      return state + 1;
      case "decrement" : 
      return state -1;
  }
}

let store = createStore(counter);

store.subscribe(()=>console.log(store.getState()));
// dispatch
store.dispatch(increment());
  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
