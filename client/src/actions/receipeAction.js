import axios from 'axios'

export const setReceipes=(receipes)=>{
    return {type:'SET_RECEIPES',payload:receipes}
}

export const startSetReceipes=()=>{
    return(dispatch)=>{
        axios.get('http://localhost:3040/receipes')
        .then((response)=>{
            const receipes=response.data
            console.log(receipes)
            dispatch(setReceipes(receipes))
        })
    }
}

export const addReceipes=(receipes)=>{
    return {type:'ADD_RECEIPES', payload:receipes}
}

export const startAddReceipes=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('http://localhost:3040/receipes',formData)
        .then((response)=>{
            const receipes=response.data
            console.log(receipes)
            dispatch(addReceipes(receipes))
            redirect()
        })
    }
}

export const removeReceipes=(receipes)=>{
    return {type:'REMOVE_RECEIPES',payload:receipes}
}

export const startRemoveReceipes=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:3040/receipes/${id}`)
        .then((response)=>{
            const receipes=response.data
            dispatch(removeReceipes(receipes._id))
        })
    }
}

