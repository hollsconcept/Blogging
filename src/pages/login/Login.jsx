import "./login.css";

 function Login() {
  return (
    <div className = "login">
    <span className = "loginTitle">Login</span>
        <form className="loginForm">
            <label className="loginLabel">Email</label>
            <input className ="loginInput" type ="email" placeholder="Enter your email.."/>
            <label className="loginLabel">Password</label>
            <input className ="loginInput" type ="password" placeholder="Enter your password.."/>
            <button className = "loginButton">Login</button>
        </form>
        <button className = "registerButton">Register</button>
    </div>
  )
}

export default Login
