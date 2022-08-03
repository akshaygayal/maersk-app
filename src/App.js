import "./App.css";
import Grid from "./Grid";
import { useState } from "react";

export default function App() {
  const [nums, setNums] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const myName = "Akshay Gayal";

  const sortHandler = () => {
    let numsS = [...nums];
    setNums(numsS.sort((a, b) => a - b));
  };

  const shuffleHandler = () => {
    let numsS = [...nums];
    let suffled = [];
    while (numsS.length) {
      let j = Math.floor(Math.random() * numsS.length);
      suffled.push(numsS[j]);
      numsS.splice(j, 1);
    }
    setNums(suffled);
  };

  return (
    <div className="AppWrapper">
      <div className="title">Shuffle and Sort</div>
      <div className="App">
        <div className="buttonWrapper">
          <button className="button" onClick={shuffleHandler}>
            SHUFFLE
          </button>
          <button className="button" onClick={sortHandler}>
            SORT
          </button>
        </div>
        <div className="GridWrapper">
          <Grid nums={nums} />
          <div className="footer">Shuffle and sort by {myName}</div>
        </div>
      </div>
    </div>
  );
}
