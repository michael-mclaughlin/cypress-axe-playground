import React from 'react';
import styled from 'styled-components';

const H4: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
}> = ({ id, dataCy, children, className }) => {
    return (
        <H4Container id={id} className={className} data-cy={dataCy}>
            {children}
        </H4Container>
    );
};

const H4Container = styled.h4``;

export default H4;
