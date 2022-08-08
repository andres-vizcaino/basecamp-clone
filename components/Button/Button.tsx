import ButtonProps from './Button.d';

const Button = ({ type, onClick, disabled = false, children }: ButtonProps) => {


    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
            {children}
        </button>
    );
}

export default Button;