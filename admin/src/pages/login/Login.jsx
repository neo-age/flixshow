import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext/AuthContext"
import { loginCall } from "../../context/authContext/ApiCalls"
import "./Login.css"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {isFetching, dispatch} = useContext(AuthContext)

    const handlelogin = (e)=>{
      e.preventDefault()
      loginCall({email, password},dispatch)
    }

  return (
    <div className='login'>
        <form className="login_form">
            <input type="text" placeholder="email address" className="login_input" onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="password" className="login_input" onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit" className='login_button' onClick={handlelogin} disabled={isFetching}>Login</button>
        </form>
    </div>
  )
}
