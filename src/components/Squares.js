import Square from './Square'

const Squares = ({ squares, toggleShowing }) => {
    return (
        <>
            <div className="daysSquares">
                {squares.map((square) => (
                    <Square square={square} toggleShowing={toggleShowing} />
                ))}
            </div>
        </>
    )
}

export default Squares
