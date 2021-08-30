import { useState } from "react"
import ChangeNotes from "./ChangeNotes"

const Popup = ({ square, onEdit }) => {
    const [editing, setEditing] = useState(false)

    const checkNotesNotEmpty = () => {
        if (square.notes === "") {
            return false
        } else {
            return true
        }
    }

    const buttonColor = () => {
        if (editing) {
            return "lightpink"
        } else {
            return "lightblue"
        }
    }

    const toggleEditing = () => {
        setEditing(!editing)
    }

    return (
        <>
            <div className={`popup popup${square.day}`}>
                <div className={`popupContent popupContent${square.day}`}>
                    <div>Day {`${square.day}`}</div>
                    {!editing && <div>Notes: {checkNotesNotEmpty() ? (
                        `${square.notes}`
                    ) : (
                        "No notes."
                    )}</div>}
                    {editing && <ChangeNotes square={square} onEdit={onEdit} toggleEditing={toggleEditing} />}
                </div>
                <div className={`popupButton popupButton${square.day}`} onClick={() => setEditing(!editing)} style={{ backgroundColor: buttonColor() }} >{editing ? "Close" : "Edit"}</div>
            </div>
        </>
    )
}

export default Popup
