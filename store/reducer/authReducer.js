
const initialState ={
    isLogged:false,
    id:null
};


const authCheck = (state=initialState,action) => {

    switch(action.type){
        case "LOGGED":
                return {
                    ...state,
                    isLogged:true,
                    id:action.id
                }
        case "FAILD":
            return {
                ...state,
                isLogged:false,
                id:null
            }
        default:
            return state

    }
    
}

export default authCheck