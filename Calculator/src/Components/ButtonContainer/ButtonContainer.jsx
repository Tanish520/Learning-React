import Button from "../Button/Button";
import "./ButtonContainer.css";
const ButtonContainer = ({ handleOnClick }) => {
  const buttons = [
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  return (
    <>
      <div classNameNameNameNameName="btn-container">
        {buttons.map((button) => {
          return (
            <Button onClick={handleOnClick} key={button} character={button} />
          );
        })}
      </div>
    </>
  );
};

export default ButtonContainer;
