import Popup from "./Popup"

const Square = ({ square, toggleShowing }) => {
    return (
        <>
            <div className={`square square${square.day}`} onClick={() => toggleShowing(square.id)} >{square.day}</div>
            {square.showing && <Popup square={square} />}
        </>
    )
}

export default Square
