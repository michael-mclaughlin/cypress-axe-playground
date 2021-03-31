import React from 'react';
import styled from 'styled-components';

const H5: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
}> = ({ id, dataCy, children, className }) => {
    return (
        <H5Container id={id} className={className} data-cy={dataCy}>
            {children}
        </H5Container>
    );
};

const H5Container = styled.h5``;

export default H5;
