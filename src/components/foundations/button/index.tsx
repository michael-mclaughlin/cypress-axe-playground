import React from 'react';
import styled from 'styled-components';

const Button: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
    ariaRole?: string;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEnctype?: string;
    formMethod?: string;
    formTarget?: string;
    name: string;
    value: string;
    buttonType?: 'button' | 'submit' | 'reset';
}> = ({
    id,
    dataCy,
    children,
    className,
    ariaRole,
    disabled,
    form,
    formAction,
    formEnctype,
    formMethod,
    formTarget,
    name,
    value,
    buttonType,
}) => {
    return (
        <ButtonContainer
            id={id}
            className={className}
            data-cy={dataCy}
            role={ariaRole}
            disabled={disabled}
            form={form}
            formAction={formAction}
            formEncType={formEnctype}
            formMethod={formMethod}
            formTarget={formTarget}
            name={name}
            value={value}
            type={buttonType}
        >
            {children}
        </ButtonContainer>
    );
};

const ButtonContainer = styled.button`
    background-color: darkGreen;
    padding: 0.25rem;
    color: #ffffff;
    font-size: 1.25rem;
    letter-spacing: 0.5px;
    border-radius: 0.25rem;
`;

export default Button;
