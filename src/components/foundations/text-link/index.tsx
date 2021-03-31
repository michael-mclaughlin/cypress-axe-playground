import React from 'react';
import styled from 'styled-components';

const TextLink: React.FC<{
    id: string;
    className?: string;
    href?: string;
    title: string;
    children?: React.ReactNode;
    onClick?: () => void;
    onChange?: () => void;
    linkText: string;
}> = ({ id, className, children, href, onChange, onClick, title, linkText }) => {
    return (
        <LinkContainer
            id={id}
            className={`Link-parent-container Text-link-parent-container ${className}`}
            onClick={onClick}
        >
            <LinkElement
                id={`text-link-${id}`}
                className={`Text-link ${className}`}
                data-cy={`text-link-${id}`}
                href={href}
                onClick={onClick}
                onChange={onChange}
                title={title}
            >
                {children}
                {linkText}
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
    width: auto;
    height: 5.5rem;
    padding: 0 0.35rem;

    &:hover {
        border: 2px solid #ff581f;
        background-color: black;
        cursor: pointer;
    }
`;

const LinkElement = styled.a`
    display: flex;
    color: #ffffff;
    flex-flow: column;
    align-items: center;
    font-size: 1rem;
    letter-spacing: 0.75px;
    text-decoration: none;
    white-space: nowrap;
    & svg {
        width: 36px;
        padding: 0 1.7rem;
    }
`;

export default TextLink;
