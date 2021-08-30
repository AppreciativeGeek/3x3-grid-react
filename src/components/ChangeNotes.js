import { useState } from "react"

const ChangeNotes = ({ square, onEdit, toggleEditing }) => {
    const [notes, setNotes] = useState(square.notes)
    const id = square.id

    const onSubmit = (e) => {
        e.preventDefault()

        /*
        if(!notes) {
            alert("Please add a note.")
            return
        }
        */

        onEdit({ id, notes })

        toggleEditing(id)

        setNotes('')
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Notes: </label>
            <input type='note' placeholder='Notes' value={notes} onChange={(e) => setNotes(e.target.value)}/>
            <input type='submit' value='Save' />
        </form>
    )
}

export default ChangeNotes
