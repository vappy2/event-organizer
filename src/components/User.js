const User = (props) => {

    return(
        <div className="profilContainer">

            <h2>{props.firstname} {props.lastname}</h2>

            <p>{props.email}</p>
            <p>{props.password}</p>
            
        </div>
    )
}

export default User;