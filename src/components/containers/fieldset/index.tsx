import React from 'react';
import styled from 'styled-components';

const Fieldset: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
}> = ({ id, dataCy, children, className }) => {
    return (
        <FieldsetContainer id={id} className={className} data-cy={dataCy}>
            {children}
        </FieldsetContainer>
    );
};

const FieldsetContainer = styled.fieldset`
    border: none;
    background-color: #eeeeee;
    border-radius: 0.25rem;
    padding: 0 1.5rem;
`;

export default Fieldset;
