import Squares from "./components/Squares";

function App() {

  return (
    <>
      <div className="container">
        <h1>Calendar lol</h1>
        <div className="calendar">
          <div className="daysLabel">
            <div class="day sunday">Sunday</div>
            <div class="day monday">Monday</div>
            <div class="day tuesday">Tuesday</div>
            <div class="day wednesday">Wednesday</div>
            <div class="day thursday">Thursday</div>
            <div class="day friday">Friday</div>
            <div class="day saturday">Saturday</div>
          </div>
          {
          /*
          <div className="square square1">1</div>
          <div className="square square2">2</div>
          <div className="square square3">3</div>
          <div className="square square4">4</div>
          <div className="square square5">5</div>
          <div className="square square6">6</div>
          <div className="square square7">7</div>
          <div className="square square8">8</div>
          <div className="square square9">9</div>
          */
          }
          <Squares squares={9} />
        </div>
        <footer>made by me lol</footer>
      </div>
    </>
  );
}

export default App;
