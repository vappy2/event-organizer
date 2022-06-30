const Event = (props) => {
    return(
        <div className="card">
            <h2>{props.title}</h2>
            <label>{props.label}</label>
            <p><i>{props.date}</i></p>
            <p>{props.description}</p>
            <p>{props.emailCreator}</p>
        </div>
    )
}

export default Event;