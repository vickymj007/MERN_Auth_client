import { createContext, useReducer } from "react"
import { authReducer } from "./authReducer.js"

const INITIAL_STATE = {
    user:[],
    isLoggedIn:false,
    token:""
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(authReducer,INITIAL_STATE)

    return(
        <AuthContext.Provider
            value={{
                user:state.user,
                isLoggedIn:state.isLoggedIn,
                token:state.token,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}