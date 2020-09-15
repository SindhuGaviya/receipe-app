import React from 'react'
import {connect} from 'react-redux'
import ReceipesForm from './Form'
import { startAddReceipes } from '../../actions/receipeAction'


function ReceipesAdd(props){
    const handleSubmit=(formData)=>{
        const redirect=()=>{
            props.history.push('/receipes')
        }
        props.dispatch(startAddReceipes(formData,redirect))
    }
    return(
        <div>
            <h1>Add Receipes</h1>
            <ReceipesForm handleSubmit={handleSubmit}/>
        </div>
    )
}

export default connect()(ReceipesAdd)