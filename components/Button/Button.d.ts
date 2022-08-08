type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export default ButtonProps;