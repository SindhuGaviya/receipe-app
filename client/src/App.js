import React from 'react';
import { Route, BrowserRouter , Link, Switch} from 'react-router-dom';
import ReceipeList from './components/receipes/List';
import ReceipeAdd from './components/receipes/Add';
import ReceipeShow from './components/receipes/Show';
import {connect} from 'react-redux'
import Home from './components/Home'
import Login from './components/Login'
import Account from './components/Account'
import {startLogout} from './actions/register'
import Register from './components/Register';
import Navigation from './components/navigation';

function App(props) { 
  return (
    <BrowserRouter>
    <div>
      <h1>Food Receipe</h1>
      <Navigation/>
       <Switch>
      <Route path='/' component={Home} exact={true}/> 
      <Route path='/users/register' component={Register}/>
      <Route path='/users/login' component={Login}/>
      <Route path='/users/account' component={Account}/>
      <Route path='/receipes' component={ReceipeList} exact={true}/>
      <Route path='/receipes/new' component={ReceipeAdd}/>
      <Route path='/receipes/:id' component={ReceipeShow}/>
      </Switch>
    </div>
    </BrowserRouter>
  )
}

const mapStateToProps=(state)=>{
  return{
     register:state.register
  }
}

export default connect(mapStateToProps)(App);
