import React, { useEffect, useState } from "react";

function DailyCloseTimer() {
  const [time, setTime] = useState("000");
  //const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    function startTime() {
      const today = new Date();
      let h = today.getUTCHours();
      let m = today.getUTCMinutes();
      let s = today.getUTCSeconds();
      h = checkTime(h);
      m = checkTime(m);
      s = checkTime(s);

      setTime(`${new Date((86400 - convertHMS(`${h}:${m}:${s}`)) * 1000)
        .toISOString()
        .substr(11, 8)}
			`);
    }

    setTimeout(startTime, 1000);
  }, [time]);

  function checkTime(i) {
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
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <button className="btn btn-outline-secondary">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="row">
      <div className="col px-3 pb-3">{timer}</div>
    </div>
  );
}

export default DailyCloseTimer;
