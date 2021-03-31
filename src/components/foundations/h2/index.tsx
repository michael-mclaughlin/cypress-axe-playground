import React from 'react';
import styled from 'styled-components';

const H2: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
}> = ({ id, dataCy, children, className }) => {
    return (
        <H2Container id={id} className={className} data-cy={dataCy}>
            {children}
        </H2Container>
    );
};

const H2Container = styled.h2``;

export default H2;
