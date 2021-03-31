import React from 'react';
import styled from 'styled-components';

const UnorderedList: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
}> = ({ id, dataCy, children, className }) => {
    return (
        <UnorderedListContainer id={id} className={className} data-cy={dataCy}>
            {children}
        </UnorderedListContainer>
    );
};

const UnorderedListContainer = styled.ul``;

export default UnorderedList;
