import React from "react";
import { useState } from "react";

function Billinput({ bill, onSetBill }) {
  return (
    <div>
      <p>How much was the bill? </p>
      <input
        type="number"
        name="billinput"
        id="billinput"
        placeholder="Bill Amount"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function Serviceinp({ selfserv, onSetServ }) {
  return (
    <div>
      <p>How did you like the service?</p>
      <select
        name="serviceinp"
        id="servinp"
        onChange={(e) => onSetServ(Number(e.target.value))}
        value={selfserv}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function FriendServiceinp({ fserv, onsetfServ }) {
  return (
    <div>
      <p>How did your friend like the service?</p>
      <select
        name="Fserviceinp"
        id="Fservinp"
        onChange={(e) => onsetfServ(Number(e.target.value))}
        value={fserv}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function FinalBill({ bill, total, tip }) {
  return (
    <div>
      <h1>
        You pay ${total} (${bill}+${tip} tip)
      </h1>
    </div>
  );
}
function Reset({ onClick }) {
  return (
    <div>
      <button className="reset" onClick={onClick}>
        Reset
      </button>
    </div>
  );
}

export default function App() {
  const [bill, setBill] = useState("");
  const [selfserv, setSelfServ] = useState(0);
  const [fserv, setfServ] = useState(0);

  const tipPercentageavg = (fserv + selfserv) / 2;
  const tip = (bill / 100) * tipPercentageavg;
  const total = tip + bill;

  function resetbuttonhandler() {
    const confirmed = window.confirm(
      "Are you sure you want to delete the bill ? "
    );

    if (confirmed) {
      setBill("");
      setSelfServ(0);
      setfServ(0);
    }
  }

  return (
    <div>
      <Billinput bill={bill} onSetBill={setBill} />
      <Serviceinp selfserv={selfserv} onSetServ={setSelfServ} />
      <FriendServiceinp fserv={fserv} onsetfServ={setfServ} />
      <FinalBill bill={bill} total={total} tip={tip} />
      <Reset onClick={resetbuttonhandler} />
    </div>
  );
}
