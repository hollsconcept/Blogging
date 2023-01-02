import "./register.css";

 function Register() {
  return (
    <div className = "register">
    <span className = "registerTitle">Register</span>
        <form className="registerForm">
            <label className="registerLabel">Username</label>
            <input className ="registerInput" type ="text" placeholder="Enter your username.."/>
            <label className="registerLabel">Email</label>
            <input className ="registerInput" type ="email" placeholder="Enter your email.."/>
            <label className="registerLabel">Password</label>
            <input className ="registerInput" type ="password" placeholder="Enter your password.."/>
            <button className = "registeredButton">Register</button>
            
        </form>
    <button className = "registerLoginButton">Login</button>
    </div>
  )
}

export default Register
