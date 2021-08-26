const Squares = ({ squares }) => {

    const createSquares = () => {
        var codeText = ""

        for (let i = 1; i <= squares; i++) {
            codeText += `<div className="square square${i}">${i}</div>`
        }

        return codeText
    }

    return (
        <>
            <div className="daysSquares" dangerouslySetInnerHTML={{ __html: createSquares() }} />
        </>
    )
}

export default Squares
