
function Alert(props) {
    
    return (
        props.alertDetail && <>
           <div className={`alert alert-${props.alertDetail.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alertDetail.type}</strong> {props.alertDetail.msg}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </>
    )
}

export default Alert;