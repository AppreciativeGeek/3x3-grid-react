const Squares = ({ squares }) => {
    return (
        <>
            <div className="daysSquares">
                {squares.map((square) => (
                    <div className={`square square${square.day}`} >{square.day}</div>
                ))}
            </div>
        </>
    )
}

export default Squares
