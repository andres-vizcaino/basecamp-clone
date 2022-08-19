type InputProps = {
    name: string;
    type: 'text' | 'password' | 'email' | 'number';
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    autoComplete?: string;
}

export default InputProps;