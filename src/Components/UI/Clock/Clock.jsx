import React, { useEffect, useState } from "react";
import "./clock.scss";
function Clock({time}) {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  let interval;
  const timeCount = () =>{
     const destination = new Date(Date.parse(time)).getTime();
     interval = setInterval(() =>{
       const now = new Date().getTime();
       const different = destination - now
       const days = Math.floor(different / (1000 * 60 * 60 * 24 ))
       const hours = Math.floor((different % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60))
       const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((different % (1000 *60)) / 1000)
       if (different <= 0) {
        clearInterval(interval.current.value);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    })
  }
  useEffect(() =>{
    timeCount()
  })
  return (
    <div className="time__side">
      <div>
        <span>{days}</span>
        <span>days</span>
      </div>
      <div>
        <span>{hours}</span>
        <span>hr</span>
      </div>
      <div>
        <span>{minutes}</span>
        <span>min</span>
      </div>
      <div>
        <span>{seconds}</span>
        <span>sc</span>
      </div>
    </div>
  );
}

export default Clock;
