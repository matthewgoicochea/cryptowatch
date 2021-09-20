import React, { useEffect, useState } from "react";

function DailyCloseTimer() {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    function startTime() {
      const today = new Date();
      let h = formatTime(today.getUTCHours());
      let m = formatTime(today.getUTCMinutes());
      let s = formatTime(today.getUTCSeconds());

      setTime(`${new Date((86400 - convertHMS(`${h}:${m}:${s}`)) * 1000)
        .toISOString()
        .substr(11, 8)}
			`);
    }

    setTimeout(startTime, 1000);
  }, [time]);

  function formatTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }

  function convertHMS(timeString) {
    const arr = timeString.split(":");
    const seconds = arr[0] * 3600 + arr[1] * 60 + +arr[2];
    return seconds;
  }

  const timer = (
    <div className="card">
      <h5 className="card-header bg-grey">Crypto Market Daily Close</h5>
      <div className="card-body">
        <h5 className="card-title text-center">{time}</h5>

        <p className="card-text"></p>
        <hr></hr>
        <div className="row justify-content-center">
          <div className="col-4 text-center">
            <button className="btn btn-outline-secondary">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col px-3 pb-3">{timer}</div>
      </div>
    </div>
  );
}

export default DailyCloseTimer;
