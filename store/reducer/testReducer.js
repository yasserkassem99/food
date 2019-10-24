

const initialState ={
    name:"yasser"
};


const authCheck = (state=initialState,action) => {
    if(action.type === "LOGGED"){
        return {
            ...state,
            name:"Oday"
        }
    }
    return state
}

export default authCheck