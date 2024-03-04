import "./componentsCss/pagenotfound.css"
function PageNoteFoundError(props) {
    return (
        <>
            <div className="ErrorContainer">
                <span aria-hidden="true">&times;</span>
                <div className="middelPart">
                    <h1>404</h1>
                    <h4>PAGE NOT FOUND</h4>
                    <h5>Try again..</h5>
                    <a href="/">Got To Home...</a>
                </div>
            </div>
        </>
    )
}

export default PageNoteFoundError;