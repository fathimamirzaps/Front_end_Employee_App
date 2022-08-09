const Button = (props) => {
    const { label, id ,onClick} = props;
    return (
        
        <button id = {id} onClick={onClick}>{label}</button>
        

    );
}

export default Button;