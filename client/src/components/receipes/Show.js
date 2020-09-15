import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function ReceipeShow(props){
    const {_id,name,description,ingredients}=props.receipe || {}
    return(
        <div>
            <h1>Receipes Show-{_id}</h1>
            <p>{name}</p>
            <p>{description}</p>
            <p>{ingredients}</p>
            {/* <Link to={`/receipes/edit/${_id}`}>edit</Link> */}
            <Link to='/receipes'>back</Link>
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        receipe:state.receipe.find(note=>note._id==id)
    }
}

export default connect(mapStateToProps)(ReceipeShow)

