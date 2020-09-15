import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css' 
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import { startSetReceipes} from './actions/receipeAction';


const store=configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})
console.log(store.getState())

if(localStorage.getItem('authToken')){
    store.dispatch(startSetReceipes())
}

const ele=(
    
  <Provider store={store}>
      <App/>
  </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));