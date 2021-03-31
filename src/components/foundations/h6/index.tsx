import React from 'react';
import styled from 'styled-components';

const H6: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
}> = ({ id, dataCy, children, className }) => {
    return (
        <H6Container id={id} className={className} data-cy={dataCy}>
            {children}
        </H6Container>
    );
};

const H6Container = styled.h6``;

export default H6;
