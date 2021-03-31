import React from 'react';
import styled from 'styled-components';

const Link: React.FC<{
    id: string;
    className?: string;
    href?: string;
    title: string;
    children?: React.ReactNode;
    onClick?: () => void;
    onChange?: () => void;
    messageChildren?: React.ReactNode;
    target?: string;
}> = ({ id, className, children, href, onChange, onClick, messageChildren, title, target }) => {
    return (
        <LinkContainer id={id} className={`Link-parent-container ${className}`}>
            <LinkElement
                id={`link-${id}`}
                className={`Link ${className}`}
                data-cy={`link-${id}`}
                href={href}
                onClick={onClick}
                onChange={onChange}
                target={target}
                title={title}
            >
                <SvgContainer>{children}</SvgContainer>
                <MessageContainer className="Link-message-container">
                    {messageChildren}
                </MessageContainer>
            </LinkElement>
        </LinkContainer>
    );
};

const LinkContainer = styled.div`
    transition: 1s ease-in-out;
    background-color: #0c2e5e;
    border: 2px solid #061831;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    padding: 1rem 1.5rem;
    border-radius: 0.25rem;
    transition: 400ms ease-in-out;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
    & .Link-message-container {
        letter-spacing: 0.5px;
        line-height: 1.25;
        padding: 1rem 1.5rem;
        min-height: 8rem;
        height: inherit;
    }
    &:hover {
        border: 2px solid #ff581f;
        background-color: #000000;
        & .Link {
            & > svg {
                background-color: #000000;
            }
        }
    }
`;
const SvgContainer = styled.div`
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    margin: 0 1.5rem 0 0;
`;

const MessageContainer = styled.p`
    font-size: 1rem;
    color: #ffffff;
    background-color: #051930;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
`;

const LinkElement = styled.a`
    display: flex;
    color: #ff581f;
    align-items: center;
    text-decoration: none;
    height: inherit;

    & svg {
        padding: 1rem 1.15rem;
        background-color: #030c18;
        border-radius: 0.25rem;
    }
`;
export default Link;
