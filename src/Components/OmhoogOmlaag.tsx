import { useState } from "react";

const Counter = () => {
  const [counters, setCounters] = useState<number[]>([0]);

  const addCOunter = () => {
    setCounters([...counters, 0]);
  };
  const increaseCounter = (index: number) => {
    setCounters(
      counters.map((counter, i) => (i === index ? counter + 1 : counter))
    );
  };
  const decreaseCounter = (index: number) => {
    setCounters(
      counters.map((counter, i) => (i === index ? counter - 1 : counter))
    );
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "10%",
        margin: "auto",
      }}
    >
      {counters.map((counter, index) => {
        let color = "black";
        if (counter > 0) {
          color = "green";
        } else if (counter < 0) {
          color = "red";
        }
        return (
          <div key={index}>
            <button onClick={() => increaseCounter(index)}>Omhoog</button>
            <div style={{ color: color }}>count {counter}</div>
            <button onClick={() => decreaseCounter(index)}>omlaag</button>
          </div>
        );
      })}
      <div>
        som van de teller {counters.reduce((prev, curr) => prev + curr, 0)}
      </div>
      <button onClick={addCOunter}>voeg teller toe</button>
    </div>
  );
};

export default Counter;
