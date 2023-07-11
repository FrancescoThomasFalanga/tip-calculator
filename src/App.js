import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [service1, setService1] = useState(0);
  const [service2, setService2] = useState(0);

  const tip = bill * ((service1 + service2) / 2 / 100);

  function handleReset() {
    setBill(0);
    setService1(0);
    setService2(0);
  }

  return (
    <div className="App">
      <Bill bill={bill} onSetBill={setBill}></Bill>
      <Service service={service1} onSetService={setService1}>
        How did you like the service?{" "}
      </Service>
      <Service service={service2} onSetService={setService2}>
        How did your friend like the service?{" "}
      </Service>

      {bill > 0 && (
        <>
          {" "}
          <Pay bill={bill} tip={tip}></Pay>
          <Reset onReset={handleReset}></Reset>
        </>
      )}
    </div>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div>
      <span>How much was the bill? </span>
      <input
        type="number"
        value={bill}
        onChange={(b) => onSetBill(Number(b.target.value))}
      />
    </div>
  );
}

function Service({ children, service, onSetService }) {
  return (
    <div>
      {children}
      <select
        value={service}
        onChange={(e) => onSetService(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Abssolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Pay({ bill, tip }) {
  return (
    <h3>
      You pay ${tip + bill} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>RESET</button>;
}
