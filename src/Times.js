import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "./App.css";

const time = ["08:00", "09:00", "10:00", "14:00", "15:00"];

function Times(props) {
  const [event, setEvent] = useState(null);
  const [info, setInfo] = useState(false);

  function displayInfo(e) {
    setInfo(true);
    setEvent(e.target.innerText);
  }

  return (
    <div className="times fs-4 d-flex justify-content-around">
      {time.map((times) => {
        return (
          <div>
            <button className="btn btn-primary" onClick={(e) => displayInfo(e)}>
              {" "}
              {times}{" "}
            </button>
          </div>
        );
      })}
      <div className="d-flex position-absolute mt-5 pt-5 ms-5">
        {info
          ? `Your appointment is set to ${event} ${props.date.toDateString()}`
          : null}
      </div>
    </div>
  );
}

export default Times;
