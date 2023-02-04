import "./index.css";
import Calendar from "react-calendar";
import { useState } from "react";
import "./App.css";
import Time from "./Time.js";

function App() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  return (
    <div>
      <h1 className="text-primary ps-5 pt-5 fw-bold text-center">
        Calendar project
      </h1>
      <p className="text-center fs-5 ms-5 mt-5">Choose your date</p>
      <div className="calendar-container container d-flex position-relative">
        <div className="row">
          <div className="col-lg-12">
            <Calendar
              onChange={setDate}
              value={date}
              onClickDay={() => setShowTime(true)}
            />
          </div>

          {date.length > 0 ? (
            <p>
              <span>Start:</span>
              {date[0].toDateString()}
              &nbsp &nbsp
              <span>End:</span>
              {date[1].toDateString()}
            </p>
          ) : (
            <p className="mt-4">
              <span className="selected-date">Selected date: </span>
              {date.toDateString()}
            </p>
          )}

          <Time showTime={showTime} date={date} />
        </div>
      </div>
    </div>
  );
}

export default App;
