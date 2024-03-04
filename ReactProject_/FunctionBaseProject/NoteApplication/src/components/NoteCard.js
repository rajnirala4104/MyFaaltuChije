import "./componentsCss/notes.css";
function NoteCard(props) {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="/" className="btn btn-danger">Delete</a>
                    <a href="/" className="btn btn-primary mx-1">Edit</a>
                </div>
            </div>
        </>
    )
}

export default NoteCard;