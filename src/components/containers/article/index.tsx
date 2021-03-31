import React from 'react';
import styled, { css } from 'styled-components';

const Article: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
}> = ({ id, dataCy, children, className }) => {
    return (
        <ArticleContainer id={id} data-cy={dataCy} className={className}>
            {children}
        </ArticleContainer>
    );
};

const DEFAULT_CONTENT_CONTAINER_STYLES = css`
    padding: 0;
`;

const ArticleContainer = styled.section`
    ${DEFAULT_CONTENT_CONTAINER_STYLES}
    display: flex;
    flex-flow: column;
    margin: 1rem 0 1.5rem;
    border: 2px solid red;
    background-color: #ffffff;
`;

export default Article;
