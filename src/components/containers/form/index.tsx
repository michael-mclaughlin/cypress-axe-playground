import React from 'react';
import styled from 'styled-components';

const Form: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
    action: string;
    method: string;
    autocomplete?: string;
    autosave?: string;
    enctype?: string;
    target?: string;
}> = ({
    id,
    dataCy,
    children,
    className,
    action,
    method,
    autocomplete,
    autosave,
    enctype,
    target,
}) => {
    return (
        <FormContainer
            id={id}
            className={className}
            action={action}
            method={method}
            autoComplete={autocomplete}
            autoSave={autosave}
            encType={enctype}
            target={target}
            data-cy={dataCy}
        >
            {children}
        </FormContainer>
    );
};

const FormContainer = styled.form`
    background-color: #082347;
    border-radius: 0.25rem;
    padding: 1rem 1.5rem 2rem;
`;

export default Form;
