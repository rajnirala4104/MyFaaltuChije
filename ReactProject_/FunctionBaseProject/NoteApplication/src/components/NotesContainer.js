import AllNotes from "./NoteCard";
import "./componentsCss/noteContainer.css"
function NotesContainer(props) {
    return (
        <>
            <div className="notes">
                <AllNotes />
                <AllNotes />
                <AllNotes />
                <AllNotes />
                <AllNotes />
            </div>
        </>
    )
}

export default NotesContainer;