import "./Button.css"

const Button = ({character = "A", onClick}) => {
    return (
        <>
            <button onClick={onClick} className="btn">{character}</button>
        </>
    );
}

export default Button;