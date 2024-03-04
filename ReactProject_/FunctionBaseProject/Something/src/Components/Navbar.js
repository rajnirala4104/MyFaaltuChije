import "./componentsCss/navBar.css";
function Navbar(props) {
    const navTheme = {
        "white":["light", "dark"],
        "red":{
            color: "#f2a8a2",
            background: "#a83d36"
        },
        "orange":{
            color:"#403021",
            background:"#ad6d2d"
        },
        "blue":{
            color:"#363b4a",
            background:"#39466e"
        },
        "green":{
            color:"#293d29",
            background:"#2f542f"
        },
        "black": ["dark", "light"]
    }
    console.log(".useColors.black ===>")
    console.log(props.userColors.black)
    console.log("props.theme ==> ")
    console.log(props.theme)
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light`} style={props.theme === props.userColors.red ? {background: "#a72727 !importent", color: "red"}:{}} >
                <a className="navbar-brand" href="/">Something<span className="com">.com</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navb arSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>   
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto text-light colorTheme-ul">
                        <li className="colors cl-red" onClick={()=>props.setColorTheme(props.userColors.red)} ></li>
                        <li className="colors cl-blue" onClick={()=>props.setColorTheme(props.userColors.blue)}></li>
                        <li className="colors cl-green" onClick={()=>props.setColorTheme(props.userColors.green)}></li>
                        <li className="colors cl-orange" onClick={()=>props.setColorTheme(props.userColors.orange)}></li>
                        <li className="colors cl-white" onClick={()=>props.setColorTheme(props.userColors.white)}></li>
                        <li className="colors cl-black" onClick={()=>props.setColorTheme(props.userColors.black)}></li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-danger my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}


export default  Navbar;