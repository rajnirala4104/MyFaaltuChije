import Cards from "./Cards";
import './componentsCss/webContent.css';
function WebContentes(props) {
    return (
        <>
            <div className="webContents container" style={props.theme}>
                {/* <h1>This is Content</h1> */}
                <div className="myCards">
                    <Cards theme={props.theme}/>
                    <Cards theme={props.theme}/>
                    <Cards theme={props.theme}/>
                </div>
            </div>
        </>
    )
}

export default WebContentes;