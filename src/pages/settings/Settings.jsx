import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css"

 function Settings() {
  return (
    <div className="settings">
      <div className = "settingsWrapper">
        <div className ="settingsTitles">
            <span className ="settingsUpdateTitle">Update your account</span>
            <span className ="settingsDelete">Delete your account</span>
            
        </div>
        <form className ="settingsForm">
          <label>
            Profile pictue
          </label>
          <div className = "settingsPP">
            <img className ="settingsImage" src = "https://www.investopedia.com/thmb/NhnAQzNqF2HrcKDmNZprh3JCk04=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/economics-source-b80e91b606bd4729815840bad4ff3ecd.png" alt = ""/>
            <label htmlFor = "fileInput">
            <i className="settingsIcon fa-regular fa-user"></i>

            </label>
            <input type="file" id="fileInput" style = {{display:"none"}}></input>
          </div>
         
          <label>Username</label>
          <input type="text" placeholder="Olaitan"/>
          <label>Email</label>
          <input type="email" placeholder="olaitan@gmail.com"/>
          <label>password</label>
          <input type="password"/>
          <button className = "settingsSubmit">Update</button>

        </form>
        
      </div>
  
    <Sidebar />
    </div>
    
  )
}

export default Settings;
