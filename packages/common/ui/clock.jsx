import { useState, useEffect } from "react";

export default function Clock({ interval = 1000 }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, interval);

    return () => clearInterval(intervalID);
  }, []);

  return <div>{time}</div>;
}
