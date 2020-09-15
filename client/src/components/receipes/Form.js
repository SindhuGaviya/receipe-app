import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class ReceipeForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            description:'',
            ingredients:''
        }
    }
        handleChange=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
      }
      handleSubmit=(e)=>{
          // const id=this.props.notes._id
          e.preventDefault()
          const formData={
              name:this.state.name,
              description:this.state.description,
              ingredients:this.state.ingredients
          }
         this.props.handleSubmit(formData)
       
      }
    
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                    <label>Name</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange} className='form-control'/>
                    </div>
                    <div className='form-group'>
                    <label>Desciption</label>
                    <input type='text' name='description' value={this.state.description} onChange={this.handleChange} className='form-control'/>
                    </div>
                    <div className='form-group'>
                    <label>Ingredients</label>
                    <textarea  type='text' name='ingredients'value={this.state.ingredients} onChange={this.handleChange}/>
                    </div>
                    <input type='submit' value='Submit Receipe' className='btn btn-secondary'/>
                </form>
             </div>
        )
    }
}

const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        receipe:state.receipe.find(note=>note._id==id)
    }
}

export default withRouter(connect(mapStateToProps)(ReceipeForm))

