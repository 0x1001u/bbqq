import React, { useEffect, useState } from "react";
const Reminder = ({ count, shutdown }) => {
  const [counter, setCounter] = useState(count);

  useEffect(() => {
    let timer;
    if (0 !== counter) {
      timer = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
    } else {
      shutdown();
    }

    return () => {
      timer && clearInterval(timer);
    };
  }, [counter, shutdown]);

  return (
    <span
      onClick={() => {
        shutdown();
      }}
    >
      跳过&nbsp;{counter}s
    </span>
  );
};

export default Reminder;
