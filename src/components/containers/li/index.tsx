import React from 'react';
import styled from 'styled-components';

const ListItem: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
}> = ({ id, dataCy, children, className }) => {
    return (
        <ListItemContainer id={id} className={className} data-cy={dataCy}>
            {children}
        </ListItemContainer>
    );
};

const ListItemContainer = styled.li`
    line-height: 1.5;
`;
export default ListItem;
