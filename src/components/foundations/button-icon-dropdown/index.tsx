import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonIcon from '../button-icon/index';
import CloseIcon from '-!svg-react-loader?name=Icon!../../../../Icons/cancel.svg';

const ButtonDropdown: React.FC<{
    id: string;
    className?: string;
    children?: React.ReactNode;
    iconChildren?: React.ReactNode;
    headingChildren: React.ReactNode;
    footerChildren?: React.ReactNode;
    dataCy: string;
}> = ({ id, className, children, headingChildren, footerChildren, iconChildren, dataCy }) => {
    const [state, setState] = useState(false);
    const openState = () => {
        setState(true);
    };
    const closeState = () => {
        setState(false);
    };

    return (
        <ButtonDropdownContainer
            id={id}
            className={className}
            data-cy={`button-dropdown-container-${dataCy}`}
        >
            <ButtonIcon
                id={`button-icon-button-dropdown-${id}`}
                className={`Button-icon-button-dropdown ${className}`}
                dataCy={`${dataCy}-button-icon-button-dropdown`}
                name={`button-icon-button-dropdown-${id}`}
                value="Learn more"
                onClick={openState}
                text="Why?"
            >
                {iconChildren}
            </ButtonIcon>
            {state && (
                <DropdownContainer
                    id={`button-dropdown-button-container-${id}`}
                    className={`Button-dropdown-button-container ${className}`}
                    data-cy={`${dataCy}-button-dropdown-container`}
                >
                    <CloseButtonContainer className="Close-button-container" onClick={closeState}>
                        <Heading2 data-cy={`${dataCy}-button-dropdown-heading`}>
                            {headingChildren}
                        </Heading2>
                        <CloseIcon />
                    </CloseButtonContainer>
                    <MessageContainer data-cy={`${dataCy}-dropdown-message-container`}>
                        {children}
                    </MessageContainer>
                    <FooterContainer data-cy={`${dataCy}-footer-dropdown-message-container`}>
                        {footerChildren}
                    </FooterContainer>
                </DropdownContainer>
            )}
        </ButtonDropdownContainer>
    );
};
const Heading2 = styled.h2`
    margin: 0 0 0 2.75rem;
    padding: 0.5rem 0;
    color: #2ddfff;
`;

const ButtonDropdownContainer = styled.article`
    transition: 1s ease-in-out;
`;
const DropdownContainer = styled.div`
    position: absolute;
    background-color: #030c18;
    border-radius: 0.5rem;
    box-shadow: 2px 5px 24px 2px rgba(0, 0, 0, 0.5);
    border: 1px solid black;
    margin: 1.75rem 0 0;
    max-width: 50%;
    z-index: 2;
    &::after {
        position: absolute;
        background-color: #030c18;
        left: 1.5rem;
        top: -0.1rem;
        content: '';
        width: 29px;
        height: 29px;
        transform: translateY(-50%) rotate(45deg);
        border-top: 1px solid black;
        border-left: 1px solid black;
        z-index: -1;
    }
`;
const CloseButtonContainer = styled.header`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    height: 3.75rem;
    & svg {
        width: 26px;
        height: 26px;
        margin: 1rem;
    }
    &:hover {
        cursor: pointer;
    }
`;

const MessageContainer = styled.div`
    margin: 1rem 1.5rem;
`;
const FooterContainer = styled.footer`
    padding: 1rem 1.5rem;
`;
export default ButtonDropdown;
