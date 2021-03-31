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
            </LinkElement>
            <DropdownContainer
                id={`link-dropdown-container-${id}`}
                className={`Link-dropdown-container ${className}`}
            >
                <MessageContainer className="Link-message-container">
                    {messageChildren}
                </MessageContainer>
            </DropdownContainer>
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
    width: 5rem;
    height: 5rem;
    overflow: hidden;
    & .Link-dropdown-container {
        width: 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        height: 5rem;
        & .Link-message-container {
            letter-spacing: 0.5px;
            line-height: 1.25;
            height: 3rem;
            overflow: hidden;
            width: 0;
            transition: 0.25s ease-in 1s ease-out;
            opacity: 0;
        }
    }
    &:hover {
        border: 2px solid #ff581f;
        width: 22rem;
        & .Link-dropdown-container {
            width: calc(100% - 1rem);
            & .Link-message-container {
                opacity: 1;
                width: inherit;
            }
        }
    }
`;

const DropdownContainer = styled.div`
    background-color: transparent;
    border-radius: 0.5rem;
    z-index: 1;
    height: inherit;
    overflow: hidden;
`;

const MessageContainer = styled.p`
    font-size: 1rem;
    color: #ffffff;
`;

const LinkElement = styled.a`
    display: flex;
    color: #ff581f;
    & svg {
        padding: 1rem 1.1rem;
    }
`;
const LinkCaption = styled.span`
    color: #ff581f;
    font-size: 0.875rem;
`;
export default Link;
