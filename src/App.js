import { useEffect, useState } from "react";
import "./App.css";
import Card from "./card";

let array1 = [];
// if (sessionStorage.getItem("myArr")) {
//   console.log("array is form session storage");
//   array1 = JSON.parse(sessionStorage.getItem("myArr"));
// } else {
//   fetch("https://gauravgitacc.github.io/postAppData/auctionData.json")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       array1 = data;
//       sessionStorage.setItem("myArr", JSON.stringify(data));
//       console.log("array1 is from api");
//     });
// }

function App() {
  let [val, setVal] = useState("");
  let [arrVal, setArrVal] = useState([]);

  useEffect(() => {
    fetch("https://gauravgitacc.github.io/postAppData/auctionData.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        array1 = data;
        // sessionStorage.setItem("myArr", JSON.stringify(data));
        console.log("array1 is from api");
        setArrVal(data);
      });
  }, []);

  function gettingVal(e) {
    setVal(e.target.value.toLowerCase().trim());
    console.log(e.target.value);
  }

  useEffect(() => {
    setArrVal(
      array1.filter((value) => value.fromLocation.toLowerCase().includes(val))
    );
  }, [val]);
  return (
    <>
      <h1 className="heading-name">Auction Status App</h1>
      <input
        type="search"
        id="search"
        value={val}
        onChange={gettingVal}
        placeholder="search by location"
      />
      <div className="main-container">
        <Card arr={arrVal} />
      </div>
    </>
  );
}

export default App;
