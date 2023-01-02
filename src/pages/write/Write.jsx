import "./write.css";

 function Write(){
    return (
        <div className = "write">
        <img className = "writeImage" src= "https://www.analyticssteps.com/backend/media/thumbnail/9772004/2435977_1606727680_finance.jpg" alt = ""/>
            <form className = "writeForm">
                <div className= "writeFormGroup">
                <label htmlFor = "fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                    <input type = "file" id="fileInput" style ={{display:"none"}}/>
                    <input type ="text" placeholder = "Title" className = "writeInput writeTitle" autoFocus = {true} />
                </div>
                <div className = "writeFormGroup">
                    <textarea placeholder="tell your story" type="text" className = "writeInput writeText">

                    </textarea>
                </div>
                <button className ="writebutton">
                    Publish
                </button>
            </form>
        </div>
    )
}

export default Write;