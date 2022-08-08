type InputProps = {
    name: string;
    type: 'text' | 'password' | 'email' | 'number';
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    autoComplete?: string;
}

export default InputProps;