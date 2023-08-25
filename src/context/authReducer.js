export const authReducer = (state,action)=>{
    switch (action.type) {
        case "SIGNIN":
            return {
                ...state,
                isLoggedIn:true
            }
        case "GET_TOKEN":
            return {
                ...state,
                token:action.payload
            }               
        case "GET_USER":
            return {
                ...state,
                user:action.payload
            }               
        case "UPDATE_AVATAR":
            return {
                ...state,
                user:[{avatar:action.payload}]
            }               
        case "SIGN_OUT":
            return {
                ...state,
                isLoggedIn:false,
                token:"",
                user:[]
            }               
        default:
            return state
    }
}