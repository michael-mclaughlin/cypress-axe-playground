import React from 'react';
import styled from 'styled-components';

const ContentInfo: React.FC<{
    id: string;
    className?: string;
    children?: React.ReactNode;
    messageChildren?: React.ReactNode;
    headingChildren: string;
    contextChildren?: string;
    footerChildren?: React.ReactNode;
    errorTypeChildren?: React.ReactNode;
}> = ({
    id,
    className,
    children,
    messageChildren,
    headingChildren,
    footerChildren,
    contextChildren,
    errorTypeChildren,
}) => {
    return (
        <ContentInfoContainer id={id} className={`Content-info-container ${className}`}>
            <Header id={`header-${id}`} className={`Header ${className}`} data-cy={`header-${id}`}>
                <Heading>
                    <SvgContainer>{children}</SvgContainer>
                    {headingChildren}
                </Heading>
                <TypeContainer>{errorTypeChildren}</TypeContainer>
            </Header>
            <MessageContainer className="article-message-container">
                <MessageChildren>{messageChildren}</MessageChildren>
                <Code>
                    <Pre>{contextChildren}</Pre>
                </Code>
            </MessageContainer>
            <Footer>{footerChildren}</Footer>
        </ContentInfoContainer>
    );
};

const ContentInfoContainer = styled.article`
    transition: 1s ease-in-out;
    background-color: #0c2e5e;
    border: 2px solid #061831;
    display: flex;
    flex-flow: column;
    height: auto;
    padding: 1rem 1.5rem;
    margin: 0 0 1.5rem 0;
    border-radius: 0.25rem;
    transition: 400ms ease-in-out;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
    & .article-message-container {
        letter-spacing: 0.5px;
        line-height: 1.25;
        padding: 1rem 1.5rem;
        min-height: 8rem;
        height: inherit;
        flex-flow: column;
    }
    &:hover {
        border: 2px solid #ff581f;
        background-color: #000000;
    }
`;
const SvgContainer = styled.div`
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    margin: 0 1.5rem 0 0;
`;

const MessageContainer = styled.main`
    font-size: 1rem;
    color: #ffffff;
    background-color: #051930;
    border-radius: 0.25rem;
    display: flex;
    overflow: auto;
    margin: 0.5rem 0;
`;

const TypeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1.25rem;
    padding: 0 1.5rem;
    background-color: #051930;
    color: #ff581f;
    border-radius: 0.25rem;
    height: 5rem;
    white-space: nowrap;
    letter-spacing: 0.5px;
`;

const Header = styled.header`
    display: flex;
    flex-flow: row nowrap;
    color: #ffffff;
    align-items: center;
    height: inherit;
    justify-content: space-between;

    & svg {
        padding: 1rem 1.15rem;
        background-color: #030c18;
        border-radius: 0.25rem;
    }
`;

const Heading = styled.h3`
    font-size: 1.25rem;
    letter-spacing: 0.5px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    word-break: break-all;
    padding-right: 1.5rem;
`;

const Code = styled.code`
    margin: 1rem 0 0 0;
`;

const Pre = styled.pre`
    background-color: #030619;
    color: #2ddfff;
    white-space: pre-wrap;
    overflow-x: auto;
    border-radius: 0.25rem;
    padding: 1rem 1.5rem;
    line-height: 2;
    font-size: 1rem;
`;

const MessageChildren = styled.h4`
    margin: 0.5rem 0 0;
    letter-spacing: 1px;
`;

const Footer = styled.footer``;
export default ContentInfo;
