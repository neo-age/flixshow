import "./Login.css"

export default function Login() {

  return (
    <div className='login'>
        <form className="login_form">
            <input type="text" placeholder="email address" className="login_input" />
            <input type="password" placeholder="password" className="login_input" />
            <button type="submit" className='login_button'>Login</button>
        </form>
    </div>
  )
}
