import top from "./topbar.css"

export default function Topbar() {
  return (
    <div className = "top">
    <div className = "topleft">
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      <i className="topIcon fa-brands fa-instagram"></i>

    </div>
    <div className = "topcenter">
      <ul className = "topList">
        <li className = "topListItem">HOME</li>
        <li className = "topListItem">CONTACT</li>
        <li className = "topListItem">ABOUT</li>
        <li className = "topListItem">WRITE</li>
        <li className = "topListItem">LOGOUT</li>
      </ul>
    </div>
    <div className = "topright">
      <img className = "topimage" src = "data:image/jpeg;base64,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" alt =""></img>
      <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    </div>
    </div>
  )
}