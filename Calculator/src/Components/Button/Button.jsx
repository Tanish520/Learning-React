import "./Button.css";

const Button = ({ character = "A", onClick }) => {
  return (
    <>
      <button onClick={onClick} classNameNameNameNameName="btn">
        {character}
      </button>
    </>
  );
};

export default Button;
