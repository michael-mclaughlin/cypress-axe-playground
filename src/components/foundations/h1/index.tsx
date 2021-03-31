import React from 'react';
import styled from 'styled-components';

const H1: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
}> = ({ id, dataCy, children, className }) => {
    return (
        <H1Container id={id} className={className} data-cy={dataCy}>
            {children}
        </H1Container>
    );
};

const H1Container = styled.h1``;

export default H1;
