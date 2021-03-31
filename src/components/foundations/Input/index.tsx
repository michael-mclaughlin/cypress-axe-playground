import React from 'react';
import styled from 'styled-components';

const Input: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
    type: string;
    required?: boolean;
    readonly?: boolean;
    placeholder?: string;
    value?: string;
}> = ({ id, dataCy, children, className, type, required, readonly, placeholder, value }) => {
    return (
        <InputComponent
            id={id}
            className={className}
            type={type}
            data-cy={dataCy}
            required={required}
            readOnly={readonly}
            placeholder={placeholder}
            value={value}
        >
            {children}
        </InputComponent>
    );
};

const InputComponent = styled.input`
    border: 2px solid #c6c6c6;
    border-radius: 0.25rem;
    padding: 0.25rem;
    font-size: 1rem;
`;

export default Input;
