import "./card.css";

import CustomButton from "./component/Custombutton/Btn";

function onclick1() {
  console.log("onclick1 fun is working fine");
}
function onclick2() {
  console.log("onclick2 fun is also working fine");
}
function onclick3(e) {
  console.log(e.target.innerText);
}

function Card({ arr }) {
  return arr.map((ele) => {
    return (
      <div className="std-det">
        <div className="status-box">
          <div>
            <h3
              className={[
                ele.status === "COMPLETED"
                  ? "completed"
                  : ele.status === "CANCELLED"
                  ? "cancel"
                  : ele.status === "PENDING"
                  ? "pending"
                  : "approve",
              ]}
            >
              {ele.status}
            </h3>
            <p>{ele.caseNumber}</p>
          </div>
          <strong>{ele.date}</strong>
        </div>
        <hr />
        <div className="location-box">
          <strong>{ele.fromLocation}</strong>
          <strong>{ele.toLocation}</strong>
        </div>
        <div className="lower">
          <p>{ele.fare}</p>
          <CustomButton
            onclickFun={onclick2}
            classText={"btn2"}
            btnName={"see more"}
          />
          <CustomButton
            onclickFun={onclick1}
            classText={"btn1"}
            btnName={"Click me"}
          />
          <CustomButton
            onclickFun={onclick3}
            classText={[
              ele.status === "COMPLETED"
                ? "completed"
                : ele.status === "CANCELLED"
                ? "cancel"
                : ele.status === "PENDING"
                ? "pending"
                : "approve",
            ]}
            btnName={ele.status}
          />
        </div>
      </div>
    );
  });
}
export default Card;

// event ko aise pass kr sakte hai
// onClick((e)=>onclick1(e))
