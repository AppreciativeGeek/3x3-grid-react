import Popup from "./Popup"

const Square = ({ square, toggleShowing, borderColor, onEdit }) => {
    const setBorder = () => {
        return `2px solid ${borderColor}`
    }

    return (
        <>
            <div className={`square square${square.day}`} onClick={() => toggleShowing(square.id)} style={{
                border: setBorder()
            }}>{square.day}</div>
            {square.showing && <Popup square={square} onEdit={onEdit} />}
        </>
    )
}

export default Square
