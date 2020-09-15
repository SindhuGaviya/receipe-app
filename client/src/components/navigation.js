import React from 'react'
import {Link} from 'react-router-dom'
import {startLogout} from '../actions/register'
import {connect} from 'react-redux'

function Navigation(props){
    const handleLogout=()=>{
        props.dispatch(startLogout())
      }
    return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" className="navbar-brand" >Logo</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
    <li className="nav-item">
        <Link to="/" className="nav-link" >Home</Link>
      </li>
      {
                    Object.keys(props.register).length !== 0 ? (
                        <div>
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                             <li className="nav-item">
                            <Link to="/users/account" className='nav-link'>Account</Link>
                            </li>
                            <li className="nav-item" >
                            <Link to='/receipes' className='nav-link'>Receipe</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="#" onClick={handleLogout} className='nav-link'>Logout</Link>
                            </li>
                            </ul>
                        </div>
                    ) : (
                            <div>
                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
        <Link to="/users/register" className="nav-link" >Register</Link>
        </li>
        <li className="nav-item">
        <Link to="/users/login" className="nav-link" >Log In</Link>
        </li>
        </ul>                  
                            </div>
                        )
                }
     
     
    </ul>
  </div>
</nav>

    )
}
const mapStateToProps=(state)=>{
    return{
       register:state.register
    }
  }
  
  export default connect(mapStateToProps)(Navigation);
  