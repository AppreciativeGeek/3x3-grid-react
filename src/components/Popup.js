const Popup = ({ square }) => {
    return (
        <div className={`popup popup${square.day}`}>
            <div>popup #{`${square.day}`}</div>
        </div>
    )
}

export default Popup
