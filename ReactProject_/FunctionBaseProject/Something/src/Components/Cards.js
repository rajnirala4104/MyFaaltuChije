import './componentsCss/cards.css';
function Cards(props) {
    return (
        <div className="card my-1 mx-1" style={props.theme}>
            <div className="card-header">
                Something
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/" className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default Cards;