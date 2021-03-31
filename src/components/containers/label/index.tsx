import React from 'react';
import styled from 'styled-components';

const Label: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
    htmlFor?: string;
}> = ({ id, dataCy, children, className, htmlFor }) => {
    return (
        <LabelContainer id={id} className={className} htmlFor={htmlFor} data-cy={dataCy}>
            {children}
        </LabelContainer>
    );
};

const LabelContainer = styled.label`
    font-size: 1rem;
    padding: 0.25rem 0;
`;

export default Label;
