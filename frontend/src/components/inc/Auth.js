import {createContext, useState, useEffect, Children} from "react"
import jwt_decode from "jwt-decode"
import {useHistory} from "react-router-dom"

const Auth = createContext() 
export default Auth


export const AuthProvider = ({ Children }) => {
    const [authTokens, setAuthTokens] = useState(() => {
        localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem ("authTokens"))
            : null
    })

    const [user, setUser] = useState(() => {
        localStorage.getItem("setAuthTokens")
            ? jwt_decode(localStorage.getItem ("authTokens"))
            : null
    })

    const [loading, setLoading] = useState (true)

    const history = useHistory()

    const loginUser = async (email, password) => {
        const response = await fetch("http://127.0.0.1:8000/token/", {
            method: "POST",
            headers:{
                "Context-Type":"application/json"
            },

            body: JSON.stringify({
                email, password
            })
        })

        const data = await response.json()
        console.log(data);

        if(response.status === 200){
            console.log("Logged In");
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem("authTokens", JSON.stringify(data))
            history.push("/")
        } else {
            console.log(response.status);
            console.log("There was a server issue");
            alert("Something went wrong" + response.status)

        }
    }

    const registerUser = async(email, username, password, password2) => {
        const response = await fetch("http://127.0.0.1:8000/register/", {
            method: "POST",
            headers: {
                "Context-Type":"application/json" 
            },
            body: JSON.stringify({
                email, username, password, password2
            })
        })

        if(response.status === 201){
            history.push("/login")
        } else {
            console.log(response.status);
            console.log("There was a server issue");
            alert("Something went wrong" + response.status)
        }
    }

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem("authTokens")
        history.push("/login")
    }


    const ContextData = {
        user,
        setUser,
        authTokens,
        setAuthTokens,
        loginUser,
        registerUser,
        logoutUser,
    }

    useEffect(() => {
        if(authTokens){
            setUser(jwt_decode(authTokens.access))
        }

        setLoading(false)
    }, [authTokens, loading])

    return (
        <Auth.Provider value={ContextData}>
            {loading? null : Children}
            
        </Auth.Provider>
    )  
}