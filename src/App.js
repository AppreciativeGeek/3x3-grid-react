import { useState } from "react";
import Squares from "./components/Squares";
import DaysLabel from "./components/DaysLabel";

function App() {
  const x = []
  for (let i = 1; i <= 31; i++) {
    const id = Math.floor(Math.random() * 10000) + 1
    x.push({
      id,
      day: i,
      showing: false,
      notes: ""
    })
  }
  const [days, setDays] = useState(x)

  const toggleShowing = (id) => {
    setDays(days.map((day) => 
      day.id === id ? { ...day, showing: !day.showing } : { ...day, showing: false }
    ))
  }

  const editNotes = (id, notes) => {
    console.log(id, notes)
    setDays(days.map((day) =>
      day.id === id ? { ...day, notes: notes } : day
    ))
  }

  return (
    <>
      <div className="container">
        <h1>Calendar lol</h1>
        <div className="calendar">
          <DaysLabel />
          <Squares squares={days} toggleShowing={toggleShowing} onEdit={editNotes} />
        </div>
        <footer>made by me lol</footer>
      </div>
    </>
  );
}

export default App;
