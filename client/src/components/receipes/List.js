import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { startSetReceipes,startRemoveReceipes } from '../../actions/receipeAction'

function ReceipesList(props){
    const handleRemove=(id)=>{
        const confirmRemove=window.confirm('Are you Sure?')
        if(confirmRemove){
            props.dispatch(startRemoveReceipes(id))
        }
   }
    if(props.receipe.length==0){
        props.dispatch(startSetReceipes())
    }
    return(
        <div>
            <h1>Receipes List-{props.receipe.length}</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.receipe.map((receipes,i)=>{
                        return(
                            <tr key={receipes._id}>
                                <td>{i+1}</td>
                                <td><Link to={`/receipes/${receipes._id}`}>{receipes.name}</Link></td>
                                <td>{receipes.description}</td>
                                <td>
                                <button className='btn btn-danger' onClick={()=>{handleRemove(receipes._id)}}>remove</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Link to='/receipes/new' className='btn btn-primary'>Add Receipes</Link>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        receipe:state.receipe
    }
}

export default connect(mapStateToProps)(ReceipesList)