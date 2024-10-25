import { useState, useEffect } from "react";

export default function Clock({ interval = 1000 }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, interval);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <time dateTime={date.toISOString()}>
      {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </time>
  )
}
