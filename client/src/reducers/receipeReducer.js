const receipeInitialState=[]

const receipeReducer=(state=receipeInitialState,action)=>{
    switch(action.type){
        case 'ADD_RECEIPES':{
            return [...state,action.payload]
        }
        case 'SET_RECEIPES':{
            return [...action.payload]
        }
        case 'REMOVE_RECEIPES':{
            return state.filter(receipes=>receipes._id!=action.payload)
        }
        default:{
            return state
        }
    }
}

export default receipeReducer