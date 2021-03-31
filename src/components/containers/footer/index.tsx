import React from 'react';
import styled, { css } from 'styled-components';

const Footer: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
}> = ({ id, dataCy, children, className }) => {
    return (
        <FooterContainer id={id} data-cy={dataCy} className={className}>
            {children}
        </FooterContainer>
    );
};

const DEFAULT_CONTENT_CONTAINER_STYLES = css`
    padding: 0;
`;

const FooterContainer = styled.footer`
    ${DEFAULT_CONTENT_CONTAINER_STYLES}
    display: flex;
    flex-flow: column;
    margin: 1rem 0 1.5rem;
`;

export default Footer;
