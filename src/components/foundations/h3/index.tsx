import React from 'react';
import styled from 'styled-components';

const H3: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
}> = ({ id, dataCy, children, className }) => {
    return (
        <H3Container id={id} className={className} data-cy={dataCy}>
            {children}
        </H3Container>
    );
};

const H3Container = styled.h3``;

export default H3;
