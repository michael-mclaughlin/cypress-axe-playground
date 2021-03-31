import React from 'react';
import styled, { css } from 'styled-components';

const Section: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
}> = ({ id, dataCy, children, className }) => {
    return (
        <SectionContainer id={id} data-cy={dataCy} className={className}>
            {children}
        </SectionContainer>
    );
};

const DEFAULT_CONTENT_CONTAINER_STYLES = css`
    padding: 0;
`;

const SectionContainer = styled.section`
    ${DEFAULT_CONTENT_CONTAINER_STYLES}
    display: flex;
    flex-flow: column;
    margin: 1rem 0 1.5rem;
`;

export default Section;
