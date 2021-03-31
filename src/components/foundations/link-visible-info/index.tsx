import React from 'react';
import styled from 'styled-components';

const LinkVisibleInfo: React.FC<{
    id: string;
    className?: string;
    href?: string;
    title: string;
    children?: React.ReactNode;
    onClick?: () => void;
    onChange?: () => void;
    messageChildren?: React.ReactNode;
}> = ({ id, className, children, href, onChange, onClick, messageChildren, title }) => {
    return (
        <LinkContainer id={id} className={`Link-parent-container ${className}`}>
            <LinkElement
                id={`link-${id}`}
                className={`Link ${className}`}
                data-cy={`link-${id}`}
                href={href}
                onClick={onClick}
                onChange={onChange}
                target="_blank"
                title={title}
            >
                {children}
                <MessageContainer className="Link-message-container">
                    {messageChildren}
                </MessageContainer>
            </LinkElement>
        </LinkContainer>
    );
};

const LinkContainer = styled.div`
    transition: 1s ease-in-out;
    background-color: #030c18;
    border: 2px solid transparent;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0.25rem;
    transition: 400ms ease-in-out;
    & .Link-message-container {
        letter-spacing: 0.5px;
        line-height: 1.25;
        margin-right: 1rem;
    }
    &:hover {
        border: 2px solid #ff581f;
        background-color: #000000;
    }
`;

const MessageContainer = styled.p`
    font-size: 1rem;
    color: #ffffff;
    padding: 1rem;
    background-color: #051930;
    border-radius: 0.25rem;
    width: inherit;
    min-height: 3.5rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;

const LinkElement = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 100%;
    height: 100%;
    & svg {
        padding: 0 0.75rem;
        width: 5rem;
    }
`;
export default LinkVisibleInfo;
