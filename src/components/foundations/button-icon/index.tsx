import React from 'react';
import styled from 'styled-components';

const ButtonIcon: React.FC<{
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
    text?: string;
    buttonType?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    onChange?: () => void;
    onBlur?: () => void;
    onFocus?: () => void;
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
    text,
    buttonType,
    onClick,
    onChange,
    onBlur,
    onFocus,
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
            onClick={onClick}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        >
            {children}
            <Text>{text}</Text>
        </ButtonContainer>
    );
};

const ButtonContainer = styled.button`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: #030c19;
    font-size: 1.25rem;
    letter-spacing: 0.5px;
    border-radius: 0.25rem;
    height: 6rem;
    min-width: 6.5rem;
    width: auto;
    display: flex;
    align-items: center;
    border: none;
    transition: 250ms ease-in-out;
    border: 2px solid transparent;
    &:hover,
    &:focus {
        cursor: pointer;
        background-color: black;
        border-color: #ff5a15;
    }
    & > svg {
        width: 36px;
        height: 36px;
    }
`;

const Text = styled.p`
    color: #ffffff;
    font-size: 1rem;
    margin: 0.5rem 0 0 0;
    padding: 0;
`;

export default ButtonIcon;
