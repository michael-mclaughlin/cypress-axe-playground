import React from 'react';
import styled from 'styled-components';
import TextLink from '../text-link';
import { headerLinks } from '../../../utils/headerLinks';

const HeaderLinkBar: React.FC<{
    onClickIntro?: () => void;
    onClickScroll?: () => void;
    onClickScrollHeading?: () => void;
    onClickScrollContrast?: () => void;
    onClickFontSizeContrast?: () => void;
    onClickReference?: () => void;
    onClickFinalChallenge?: () => void;
    onClickPa11yReports?: () => void;
    onChange?: () => void;
    onBlur?: () => void;
}> = ({ onChange, onClickIntro, onClickPa11yReports, onClickFinalChallenge, onClickReference, onClickFontSizeContrast, onClickScrollContrast, onClickScroll, onClickScrollHeading, onBlur }) => {
    
    const LearnIcon = headerLinks[0].icon;
    const SolutionIcon = headerLinks[1].icon;
    const BookIcon = headerLinks[2].icon;
    const InnovationIcon = headerLinks[3].icon;
    const IdeaIcon = headerLinks[4].icon;
    const ResourceIcon = headerLinks[5].icon;
    const ComputerIcon = headerLinks[6].icon;

    return (
        <>
            <TextLink
                id="link-1"
                title="link to accessible forms references"
                className="form-reference-link"
                linkText="Intro"
                onClick={onClickIntro}
            >
                <LearnIcon />
            </TextLink>
            <TextLink
                id="link-2"
                title="link to accessible forms references"
                className="form-reference-link"
                linkText="Forms"
                onClick={onClickScroll}
            >
                <SolutionIcon />
            </TextLink>
            <TextLink
                id="link-3"
                title="link to accessible forms references"
                className="form-reference-link"
                linkText="Headings"
                onClick={onClickScrollHeading}
            >
                <BookIcon />
            </TextLink>
            <TextLink
                id="link-4"
                title="link to accessible forms references"
                className="form-reference-link"
                linkText="Contrast"
                onClick={onClickScrollContrast}
            >
                <InnovationIcon />
            </TextLink>
            <TextLink
                id="link-5"
                title="link to accessible forms references"
                className="form-reference-link"
                linkText="Font Size"
                onClick={onClickFontSizeContrast}
            >
                <IdeaIcon />
            </TextLink>
            <TextLink
                id="link-6"
                title="link to references"
                className="references-reference-link"
                linkText="References"
                onClick={onClickReference}
            >
                <ResourceIcon />
            </TextLink>
            <TextLink
                id="link-7"
                title="link to references"
                className="references-reference-link"
                linkText="Final Challenge"
                onClick={onClickFinalChallenge}
            >
                <ComputerIcon />
            </TextLink>
            <TextLink
                id="link-8"
                title="link to references"
                className="references-reference-link"
                linkText="Error Reports"
                onClick={onClickPa11yReports}
            >
                <ComputerIcon />
            </TextLink>
        </>

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

export default HeaderLinkBar;
