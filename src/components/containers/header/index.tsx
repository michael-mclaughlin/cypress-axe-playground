import React from 'react';
import styled, { css } from 'styled-components';

// not a structural component; for WCAG 2.1 AA compliance
const Header: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
}> = ({ id, dataCy, children, className }) => {
    return (
        <HeaderContainer id={id} data-cy={dataCy} className={className}>
            {children}
        </HeaderContainer>
    );
};

const DEFAULT_CONTENT_CONTAINER_STYLES = css`
    padding: 0;
`;

const HeaderContainer = styled.header`
    ${DEFAULT_CONTENT_CONTAINER_STYLES}
    display: flex;
    flex-flow: row nowrap;
    margin: 1rem 0 1.25rem;
`;

export default Header;
