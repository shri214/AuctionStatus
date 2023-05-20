import "./Btn.css";
function CustomButton({ onclickFun, classText, btnName }) {
  return (
    <button onClick={onclickFun} className={classText}>
      {btnName}
    </button>
  );
}
export default CustomButton;
