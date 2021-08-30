import Square from './Square'

const Squares = ({ squares, toggleShowing, onEdit }) => {
    return (
        <>
            <div className="daysSquares">
                {squares.map((square) => (
                    <Square square={square} toggleShowing={toggleShowing} borderColor={square.showing ? "rgb(71, 202, 32)" : "rgb(206, 211, 218)"} onEdit={onEdit} />
                ))}
            </div>
        </>
    )
}

export default Squares
