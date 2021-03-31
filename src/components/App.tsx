import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import LabelContainer from './containers/label/index';
import Input from './foundations/input/index';
import Form from './containers/form/index';
import Fieldset from './containers/fieldset/index';
import Legend from './foundations/legend/index';
import ContentInfo from './foundations/Content-info/index';
import Div from './containers/div/index';
import Section from './containers/section/index';
import Header from './containers/header/index';
import UnorderedList from './containers/ul/index';
import ListItem from './containers/li/index';
import ColorPickerDynamic from './containers/color-picker-dynamic/index';
import ColorPickerAuroraText from './containers/color-picker-aurora-text/index';
import Button from './foundations/button/index';
import H1 from './foundations/h1/index';
import H2 from './foundations/h2/index';
import H3 from './foundations/h3/index';
import H4 from './foundations/h4/index';
import H5 from './foundations/h5/index';
import H6 from './foundations/h6/index';
import DynamicLinkText from './foundations/link-dynamic-text/index';
import TextLink from './foundations/text-link/index';
import InfoLink from './foundations/info-link/index';
import VisibleInfoLink from './foundations/link-visible-info/index';
import LearnIcon from '-!svg-react-loader?name=Icon!../../Icons/mind.svg';
import SolutionIcon from '-!svg-react-loader?name=Icon!../../Icons/solution.svg';
import InnovationIcon from '-!svg-react-loader?name=Icon!../../Icons/lightbulb-gear.svg';
import IdeaIcon from '-!svg-react-loader?name=Icon!../../Icons/idea-lightbulb.svg';
import ChallengeIcon from '-!svg-react-loader?name=Icon!../../Icons/book.svg';
import ChallengeIconLarge from '-!svg-react-loader?name=Icon!../../Icons/book-large.svg';
import ResourcesIcon from '-!svg-react-loader?name=Icon!../../Icons/closed-book.svg';
import OpenBookWithBulbIcon from '-!svg-react-loader?name=Icon!../../Icons/open-book-with-bulb.svg';
import ComputerWithCap from '-!svg-react-loader?name=Icon!../../Icons/computer-with-cap.svg';
import ButtonIconDropdown from './foundations/button-icon-dropdown/index';

//TODO: figure out a way to present error report data below only works for a 1 time not for error updates...will need to do more research
export const MyData = () => {
    const [data, setData] = useState([]);
    const [violationData, setViolationData] = useState([]);
    async function getData() {
        const response = await fetch('http://localhost:3001/data');
        const responseData = await response.json();
        setData(responseData);
        setViolationData(responseData[0].violations);
    }
    useEffect(() => {
        getData();
    }, [data]);
    return (
        <div>
            {data.map((item, index) => (
                <ErrorRuleParentContainer key={`${item}-${index}`}>
                    {violationData.map((newItem: any, index: number) => {
                        return (
                            <ContentInfo
                                key={`pa11y-data-content-info-${index}`}
                                id={`pa11y-data-content-info-${index}`}
                                className="Pa11y-data-content-info"
                                messageChildren={newItem.description}
                                headingChildren={newItem.help}
                                errorTypeChildren={`Impact: ${newItem.impact}, Error Type: ${newItem.id}`}
                                contextChildren={newItem.helpUrl}
                                footerChildren={
                                    <div>
                                        {newItem.nodes.map((node: any, index: number) => {
                                            return (
                                                <ErrorRuleContainer key={`${node}-${index}`}>
                                                    <ErrorRuleSummaryFailureContainer
                                                        key={`${node}-${node.failureSummary}-${index}`}
                                                    >
                                                        {node.failureSummary}
                                                    </ErrorRuleSummaryFailureContainer>
                                                    <ErrorRuleCodeContainer>
                                                        <ErrorRuleHtmlContainer
                                                            key={`${node}-${node.html}-${index}`}
                                                        >
                                                            {node.html}
                                                        </ErrorRuleHtmlContainer>
                                                    </ErrorRuleCodeContainer>
                                                </ErrorRuleContainer>
                                            );
                                        })}
                                    </div>
                                }
                            >
                                <OpenBookWithBulbIcon />
                            </ContentInfo>
                        );
                    })}
                </ErrorRuleParentContainer>
            ))}
        </div>
    );
};

const App = () => {
    const homeRef = useRef(null);
    const formRef = useRef(null);
    const headingsRef = useRef(null);
    const contrastRef = useRef(null);
    const fontSizeRef = useRef(null);
    const introRef = useRef(null);
    const referencesRef = useRef(null);
    const finalChallengeRef = useRef(null);
    const pa11yReportsRef = useRef(null);
    const handleScroll = () => {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handleHomeScroll = () => {
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handleScrollHeadings = () => {
        headingsRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handleScrollContrast = () => {
        contrastRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handleScrollFontSizeContrast = () => {
        fontSizeRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handleScrollIntro = () => {
        introRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handleScrollReference = () => {
        referencesRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handleScrollFinalChallenge = () => {
        finalChallengeRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handleScrollPa11yReports = () => {
        pa11yReportsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AppContainer>
            <Header
                id="app-header-container"
                className="App-header-container"
                dataCy="app-header-container"
            >
                <Div
                    id="logo-title-container"
                    className="Logo-title-container"
                    dataCy="logo-title-container"
                >
                    <Div
                        id="logo-container"
                        onClick={handleHomeScroll}
                        className="Logo-container Home-logo-container"
                        dataCy="logo-container"
                    >
                        <ChallengeIcon />
                    </Div>
                    <H1 id="app-heading-1" className="App-heading-1" dataCy="app-heading-1">
                        AXE Testing Playground
                    </H1>
                </Div>
                <NavContainer className="nav-links-container">
                    <TextLink
                        id="link-12"
                        title="link to accessible forms references"
                        className="form-reference-link"
                        linkText="Intro"
                        onClick={handleScrollIntro}
                    >
                        <LearnIcon />
                    </TextLink>
                    <TextLink
                        id="link-2"
                        title="link to accessible forms references"
                        className="form-reference-link"
                        linkText="Forms"
                        onClick={handleScroll}
                    >
                        <SolutionIcon />
                    </TextLink>
                    <TextLink
                        id="link-3"
                        title="link to accessible forms references"
                        className="form-reference-link"
                        linkText="Headings"
                        onClick={handleScrollHeadings}
                    >
                        <OpenBookWithBulbIcon />
                    </TextLink>
                    <TextLink
                        id="link-4"
                        title="link to accessible forms references"
                        className="form-reference-link"
                        linkText="Contrast"
                        onClick={handleScrollContrast}
                    >
                        <InnovationIcon />
                    </TextLink>
                    <TextLink
                        id="link-5"
                        title="link to accessible forms references"
                        className="form-reference-link"
                        linkText="Font Size"
                        onClick={handleScrollFontSizeContrast}
                    >
                        <IdeaIcon />
                    </TextLink>
                    <TextLink
                        id="link-6"
                        title="link to references"
                        className="references-reference-link"
                        linkText="References"
                        onClick={handleScrollReference}
                    >
                        <ResourcesIcon />
                    </TextLink>
                    <TextLink
                        id="link-7"
                        title="link to references"
                        className="references-reference-link"
                        linkText="Final Challenge"
                        onClick={handleScrollFinalChallenge}
                    >
                        <ComputerWithCap />
                    </TextLink>
                    <TextLink
                        id="link-8"
                        title="link to references"
                        className="references-reference-link"
                        linkText="Error Reports"
                        onClick={handleScrollPa11yReports}
                    >
                        <ComputerWithCap />
                    </TextLink>
                </NavContainer>
            </Header>
            <HomeTargetContainer>
                <Target id="home-target" ref={homeRef} />
            </HomeTargetContainer>
            <Div
                id="svg-div-container-parent"
                className="Svg-div-container-parent"
                dataCy="svg-div-container-parent"
            >
                <Div
                    id="svg-div-container"
                    className="Svg-div-container video-div-container"
                    dataCy="svg-div-container"
                >
                    <iframe
                        src="https://player.vimeo.com/video/478353221"
                        title="accessibility video by Rebecka W. Fagerberg"
                        width="500"
                        height="351"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        src="https://player.vimeo.com/video/416950233"
                        title="accessibility video by Nadeen Da'na"
                        width="500"
                        height="351"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>
                </Div>
            </Div>
            <IntroTargetContainer>
                <Target id="intro-target" ref={introRef} />
            </IntroTargetContainer>
            <Section
                id="introduction-section"
                className="Introduction-section"
                dataCy="introduction-section"
            >
                <H2
                    id="introduction-heading"
                    className="section-heading Introduction-heading  heading-2"
                    dataCy="introduction-heading"
                >
                    <Div id="logo-container" className="Logo-container" dataCy="logo-container">
                        <LearnIcon />
                    </Div>
                    Introduction
                </H2>
                <InstructionsContainer className="Instructions-container color-contrast-instructions-container">
                    <InstructionsParagraph className="section-instructions">
                        <strong>
                            <pre>Welcome to the AXE Testing Playground!</pre>
                        </strong>
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions section-instructions-paragraph">
                        Internet accessibility has come a long way over the past few years and,
                        should be an ever present necessity for the population who require
                        assistance from other avenues to use for websites, applications and internet
                        browsing. Society takes the ability to use the internet for granted due to
                        it being ever present in today's culture of communication. A lot of people
                        just either pull out their phones or sit down at their computer and start
                        typing away to surf the web. Now think about what it would be like to surf
                        the web and <strong>NOT</strong> be able to access certain content on a
                        website or, <strong>NOT</strong> be able to fill out an online form so your
                        medications can arrive at your door on time...just because you are you.
                        Let's go one step further for understanding shall we?
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        <strong>
                            <pre>Use your imagination to put yourself in someone else's shoes.</pre>
                        </strong>
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions section-instructions-paragraph">
                        <strong>For example</strong>: squinting your eyes so you have a difficult
                        time seeing the screen then...trying to use the internet while your eyes are
                        squinted. It's a much different experience compared to how sighted people
                        have to use the internet. You have gained a little bit of a crude
                        understanding of what it's like to need visual assistive technologies
                        (screenreaders) by individuals who have sight impairment.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions section-instructions-paragraph">
                        <strong>Another example:</strong> grab a pencil/pen or straight edge and put
                        it in your <strong>non-dominant hand</strong>. Using the pencil, try to type
                        into a website form within a website on screen OR try to navigate through an
                        online presence using the keyboard. It's a much different experience
                        compared to how non impaired people have to use the internet. You have now
                        gained crude insight into how an individual with physical impairments may
                        need to use the internet.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        <strong>
                            <pre>Now imagine what it's like for people with other impairments.</pre>
                        </strong>
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions section-instructions-paragraph">
                        Engineers, developers and quality assurance engineers have to be able to
                        evaluate their current work to assess how accessible their product is. Now,
                        there are new automation and testing technologies that can be used to help
                        produce an accessible internet presence.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        <strong>
                            <pre>Why I created this application repo.</pre>
                        </strong>
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions section-instructions-paragraph">
                        To provide an avenue for individuals to learn how to write{' '}
                        <strong>Cypress tests</strong> while learning how to use:{' '}
                        <strong>AXE-CORE</strong>, <strong>a11y-rule</strong> npm package and{' '}
                        <strong>pa11y</strong>.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        This repo is designed and developed so you can:
                        <UnorderedList id="" className="" dataCy="">
                            <ListItem id="" className="" dataCy="">
                                Use the provided component to create your own{' '}
                                <strong>Cypress tests</strong>
                            </ListItem>
                            <ListItem id="" className="" dataCy="">
                                Write <strong>custom components</strong> to test to detect
                                accessibility issues within your test components.
                            </ListItem>
                            <ListItem id="" className="" dataCy="">
                                Create new <strong>composed components</strong> from the provided
                                components to test for accessibility.
                            </ListItem>
                            <ListItem id="" className="" dataCy="">
                                Test the <strong>whole application</strong> end to end to learn more
                                about application accessibility.
                            </ListItem>
                            <ListItem id="" className="" dataCy="">
                                Create new <strong>mini-webapps</strong> and{' '}
                                <strong>micro-sites</strong> from the provided components AND/OR
                                with custom created styled components to test for whole{' '}
                                <strong>application accessibility.</strong>
                            </ListItem>
                            <ListItem id="" className="" dataCy="">
                                Finally, to <strong>challenge yourself</strong> by doing{' '}
                                <strong>exercises</strong> to solidify your knowledge base.
                            </ListItem>
                        </UnorderedList>
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        <strong>
                            <pre>
                                Hint: pay attention to the resource links and try the section
                                challenges...
                            </pre>
                        </strong>
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        <strong>
                            <pre>
                                Follow the instructions within each section and...Do your best!
                            </pre>
                        </strong>
                    </InstructionsParagraph>
                </InstructionsContainer>
            </Section>
            <FormsTargetContainer>
                <Target id="forms-target" ref={formRef} />
                <InfoLink
                    id="link-9"
                    href="https://www.w3.org/WAI/test-evaluate/preliminary/"
                    messageChildren={
                        <strong>
                            <pre>
                                HINT: Go to w3.org to learn more about doing a preliminary checklist
                                for accessibility...
                            </pre>
                        </strong>
                    }
                    title="Click this link to go to w3.org to learn more about doing a preliminary checklist for accessibility."
                    className="references-link"
                    target="_blank"
                >
                    <ResourcesIcon />
                </InfoLink>
            </FormsTargetContainer>
            <Section id="form-section" className="Form-section" dataCy="form-section-section">
                <Header
                    id="header-form-section"
                    className="Header-form-section"
                    dataCy="header-form-section"
                >
                    <ButtonIconDropdown
                        id="form-exercise-learn-button"
                        className="learn-button form-exercise-learn-button"
                        headingChildren={'Why is this important?'}
                        iconChildren={<SolutionIcon />}
                        dataCy="form-exercise-learn-button"
                    >
                        <InstructionsContainer>
                            <InstructionsParagraph className="form-learn-button-instructions">
                                Forms can be visually and cognitively complex and challenging to
                                use. Accessible forms are easier to use for everyone, including
                                people with disabilities.
                            </InstructionsParagraph>
                            <InstructionsParagraph className="form-learn-button-instructions">
                                <strong>People with cognitive disablities: </strong>
                                can better understand the form and how to complete it, as making
                                forms accessible improves the layout structure, instructions, and
                                feedback.
                            </InstructionsParagraph>
                            <InstructionsParagraph className="form-learn-button-instructions">
                                <strong>People using speech input: </strong>
                                can use the labels via voice commands to activate controls and move
                                the focus to the fields that they have to complete.
                            </InstructionsParagraph>
                            <InstructionsParagraph className="form-learn-button-instructions">
                                <strong>People with limited dexterity: </strong>
                                benefit from large clickable areas that include the labels,
                                especially for smaller controls, such as radio buttons and
                                checkboxes.
                            </InstructionsParagraph>
                            <InstructionsParagraph className="form-learn-button-instructions">
                                <strong>People using screen readers: </strong>
                                can identify and understand form controls more easily because they
                                are associated with labels, field sets, and other structural
                                elements.
                            </InstructionsParagraph>
                        </InstructionsContainer>
                    </ButtonIconDropdown>{' '}
                    <H1
                        id="form-section-heading-1"
                        className="Heading-1"
                        dataCy="form-section-heading-1"
                    >
                        Accessibility with Forms Exercise
                    </H1>
                </Header>
                <InstructionsContainer>
                    <InstructionsParagraph className="section-instructions">
                        Below you will see a form to help you understand how to create{' '}
                        <strong>WCAG 2.0 AA</strong> compliant forms.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        This form does <strong>not</strong> pass the <strong>WCAG 2.0 AA</strong>{' '}
                        initially to surface errors for you to learn from.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        In your terminal change directories into the <strong>cypress</strong> folder{' '}
                        then, run this command in your terminal:{' '}
                    </InstructionsParagraph>
                    <strong>
                        <code>
                            <pre>npm run start:test</pre>
                        </code>
                    </strong>
                    <InstructionsParagraph className="section-instructions">
                        This will open a new browser window, open the <strong>cypress GUI</strong>{' '}
                        while running the <strong>pa11y</strong> tests all at once. You will be able
                        to see the readout <strong>both</strong> within the{' '}
                        <strong>cypress GUI</strong> and within the <strong>terminal window</strong>
                        . (You may need to scroll up within the terminal window to see the{' '}
                        <strong>pa11y</strong> errors)
                    </InstructionsParagraph>
                </InstructionsContainer>
                <Form action="" method="post" id="form" className="Form" dataCy="form">
                    <Fieldset
                        id="fieldset-container"
                        className="Fieldset-container"
                        dataCy="fieldset-container"
                    >
                        <Legend id="legend" className="Legend" dataCy="legend">
                            The Form
                        </Legend>
                        <Div id="name-div" className="Div Name-div" dataCy="name-div">
                            <LabelContainer
                                id="name-label-container"
                                className="Name-label-container"
                                dataCy="name-label-container"
                                htmlFor=""
                            >
                                Name
                            </LabelContainer>
                            <Input
                                id="name-input"
                                className="Name-input"
                                type="text"
                                dataCy="name-input"
                            />
                        </Div>
                        <Div id="address-div" className="Div Address-div" dataCy="address-div">
                            <LabelContainer
                                id="address-label-container"
                                className="Address-label-container"
                                dataCy="address-label-container"
                                htmlFor=""
                            >
                                Address
                            </LabelContainer>
                            <Input
                                id="address-input"
                                className="Address-input"
                                type="text"
                                dataCy="address-input"
                            />
                        </Div>
                        <Div id="address2-div" className="Div Address2-div" dataCy="address2-div">
                            <LabelContainer
                                id="address2-label-container"
                                className="Address2-label-container"
                                dataCy="address2-label-container"
                                htmlFor="address2-input"
                            >
                                Address 2
                            </LabelContainer>
                            <Input
                                id="address2-input"
                                className="Address2-input"
                                type="text"
                                dataCy="address2-input"
                            />
                        </Div>
                        <Div id="city-div" className="Div City-div" dataCy="city-div">
                            <LabelContainer
                                id="city-label-container"
                                className="city-label-container"
                                dataCy="city-label-container"
                                htmlFor=""
                            >
                                City
                            </LabelContainer>
                            <Input
                                id="city-input"
                                className="city-input"
                                type="text"
                                dataCy="city-input"
                            />
                        </Div>
                        <Div id="state-div" className="Div state-div" dataCy="state-div">
                            <LabelContainer
                                id="state-label-container"
                                className="state-label-container"
                                dataCy="state-label-container"
                                htmlFor="state-input"
                            >
                                State
                            </LabelContainer>
                            <Input id="" className="state-input" type="text" dataCy="state-input" />
                        </Div>
                        <Div id="zip-div" className="Div Zip-div" dataCy="zip-div">
                            <LabelContainer
                                id="zip-label-container"
                                className="zip-label-container"
                                dataCy="zip-label-container"
                                htmlFor=""
                            >
                                Zip Code
                            </LabelContainer>
                            <Input
                                id="zip-input"
                                className="zip-input"
                                type="text"
                                dataCy="zip-input"
                            />
                        </Div>
                        <Div id="phone-div" className="Div Phone-div" dataCy="phone-div">
                            <LabelContainer
                                id="phone-label-container"
                                className="phone-label-container"
                                dataCy="phone-label-container"
                                htmlFor="phone-input"
                            >
                                Phone Number
                            </LabelContainer>
                            <Input
                                id="phone-input"
                                className="phone-input"
                                type="text"
                                dataCy="phone-input"
                            />
                        </Div>
                        <Div id="email-div" className="Div" dataCy="email-div">
                            <LabelContainer
                                id="email-label-container"
                                className="Email-label-container"
                                dataCy="email-label-container"
                                htmlFor="email-input"
                            >
                                Email
                            </LabelContainer>
                            <Input
                                id=""
                                className="Email-input"
                                type="email"
                                dataCy="email-input"
                            />
                        </Div>
                        <Div
                            id="button-container"
                            className="Div Button-container"
                            dataCy="button-div"
                        >
                            <Button
                                id="reset-button"
                                name="reset-button"
                                className="Reset-button"
                                value="reset"
                                buttonType="reset"
                                dataCy="reset-button"
                            >
                                Clear
                            </Button>
                            <Button
                                id="submit-button"
                                name="submit-button"
                                className="Submit-button"
                                value="submit"
                                buttonType="submit"
                                dataCy="submit-button"
                            >
                                Submit
                            </Button>
                        </Div>
                    </Fieldset>
                </Form>
                <LinkContainer className="forms-link-container">
                    <VisibleInfoLink
                        id="link-10"
                        href="https://www.w3.org/WAI/tutorials/forms/"
                        messageChildren={
                            'Go to w3.org to learn more about accessible forms and how to create a form that is usable for all individuals.'
                        }
                        title="Click this link to go to w3.org to learn more about accessible forms and how to create a form that is usable for all individuals."
                        className="form-reference-link"
                    >
                        <SolutionIcon />
                    </VisibleInfoLink>
                </LinkContainer>
                <DynamicLinkText
                    id="link-11"
                    href="javascript:void(0)"
                    messageChildren={
                        'This form does NOT pass WCAG 2.1 AA compliance. There are multiple issues that are related to this form that need to be addressed. Fix this form and make it pass WCAG 2.1 AA guidelines. Use the accessibility-form.spec.js cypress test to write your new test.'
                    }
                    title="Challenge: This form does NOT pass WCAG 2.1 AA compliance. There are multiple issues that are related to this form that need to be addressed. Fix this form and make it pass WCAG 2.1 AA guidelines. Use the accessibility-form.spec.js cypress test to write your new test."
                    className="forms-challenge-link"
                    linkText="Challenge"
                >
                    <ChallengeIcon />
                </DynamicLinkText>
            </Section>
            <HeadingsTargetContainer>
                <Target id="headings-target" ref={headingsRef} />
                <InfoLink
                    id="link-13"
                    href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html"
                    messageChildren={
                        <strong>
                            <pre>
                                HINT: Go to w3.org to learn more about navigation mechanisms
                                including Heading Order...
                            </pre>
                        </strong>
                    }
                    title="Click this link to go to w3.org to learn more about navigation mechanisms including Heading Order."
                    className="references-link"
                    target="_blank"
                >
                    <ResourcesIcon />
                </InfoLink>
            </HeadingsTargetContainer>
            <Section
                id="heading-order-section"
                className="Heading-order-section"
                dataCy="heading-order-section"
            >
                <Header
                    id="header-heading-order-section"
                    className="Header-heading-order-section"
                    dataCy="header-heading-order-section"
                >
                    <ButtonIconDropdown
                        id="heading-order-exercise-learn-button"
                        className="learn-button form-exercise-learn-button"
                        headingChildren={'Why is this important?'}
                        iconChildren={<OpenBookWithBulbIcon />}
                        dataCy="heading-order-exercise-learn-button"
                    >
                        <InstructionsContainer>
                            <InstructionsParagraph className="heading-order-learn-button-instructions">
                                A heading describes the content that follows it, much like a news
                                headline. When arriving at a new page, sighted users gravitate
                                toward headings to quickly find what they want on the page. Screen
                                reader and other assistive technology users can also skip from
                                heading to heading.
                            </InstructionsParagraph>
                            <InstructionsParagraph className="heading-order-learn-button-instructions">
                                Headings create an outline for the page, similar to a term paper
                                outline or table of contents. The <strong>h1</strong> describes the
                                page as a whole, and should be similar to the page{' '}
                                <strong>title</strong>.
                            </InstructionsParagraph>
                            <InstructionsParagraph>
                                A page should typically have only one <strong>h1</strong>. Headings{' '}
                                <strong>h2</strong> through <strong>h6</strong> represent increasing
                                degrees of <strong>"indentation"</strong> in our conceptual{' '}
                                <strong>"outline"</strong>.
                            </InstructionsParagraph>
                            <InstructionsParagraph>
                                Because of this, it does not make sense to skip heading levels, such
                                as from <strong>h2</strong> to <strong>h4</strong>, going down the
                                page.
                            </InstructionsParagraph>
                        </InstructionsContainer>
                    </ButtonIconDropdown>

                    <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                        Accessibility with Heading Order Exercise
                    </H1>
                </Header>
                <InstructionsContainer>
                    <InstructionsParagraph className="section-instructions">
                        Take a look at the <strong>Heading Order</strong> of these 6 headings and
                        observe that they are out of order based off of the{' '}
                        <strong>semantic HTML5/ WCAG 2.0 AA</strong> compliance standards.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        The <strong>headings</strong> are out of order on purpose so you can see the
                        errors when you first run the script comands.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        In your terminal change directories into the <strong>cypress</strong> folder{' '}
                        then, run this command within your terminal window:{' '}
                    </InstructionsParagraph>
                    <strong>
                        <code>
                            <pre>npm run start:test</pre>
                        </code>
                    </strong>
                    <InstructionsParagraph className="section-instructions">
                        This will open a new browser window, open the <strong>cypress GUI</strong>{' '}
                        while running the <strong>pa11y</strong> tests all at once.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        You will be able to see the readout <strong>both</strong> within the{' '}
                        <strong>cypress GUI</strong> and within the <strong>terminal window</strong>
                        , (You may need to scroll up within the terminal window to see the{' '}
                        <strong>pa11y</strong> errors)
                    </InstructionsParagraph>
                </InstructionsContainer>
                <Div
                    id="heading-order-container-div"
                    className="Div Heading-order-container-div"
                    dataCy="heading-order-container-div"
                >
                    <Div
                        id="headings-container-div"
                        className="Div Headings-container-div"
                        dataCy="headings-container-div"
                    >
                        <H6 id="heading-6" className="Heading-6" dataCy="heading-6">
                            Heading Order H6
                        </H6>
                        <H4 id="heading-4" className="Heading-4" dataCy="heading-4">
                            Heading Order H4
                        </H4>
                        <H2 id="heading-2" className="Heading-2" dataCy="heading-2">
                            Heading Order H2
                        </H2>
                        <H3 id="heading-3" className="Heading-3" dataCy="heading-3">
                            Heading Order H3
                        </H3>
                        <H5 id="heading-5" className="Heading-5" dataCy="heading-5">
                            Heading Order H5
                        </H5>
                        <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                            Heading Order H1
                        </H1>
                    </Div>
                </Div>
                <LinkContainer className="heading-order-link-container">
                    <VisibleInfoLink
                        id="link-14"
                        href="https://webaim.org/techniques/semanticstructure/#nature"
                        messageChildren={
                            'Go to WebAIM to learn more about semantic DOM structure and how correct DOM structure can mitigate accessibility errors.'
                        }
                        title="Click this link to go to WebAIM to learn more about semantic DOM structure and how correct DOM structure can mitigate accessibility errors."
                        className="heading-order-reference-link"
                    >
                        <SolutionIcon />
                    </VisibleInfoLink>
                    <VisibleInfoLink
                        id="link-15"
                        href="https://webaim.org/techniques/semanticstructure/#headings"
                        messageChildren={
                            'Go to WebAIM to learn more about semantic DOM structure and how that relates to Heading Order.'
                        }
                        title="Click this link to go to WebAIM to learn more about semantic DOM structure and how that relates to Heading Order."
                        className="heading-order-reference-link"
                    >
                        <InnovationIcon />
                    </VisibleInfoLink>
                </LinkContainer>
                <DynamicLinkText
                    id="link-16"
                    href="javascript:void(0)"
                    messageChildren={
                        'These headings are out of order and need to be placed back into the correct order to pass WCAG 2.1 AA compliance.  Fix the headings to make them WCAG 2.1 AA compliant.  Use the accessibility-heading-order.spec.js file to create your new test.'
                    }
                    title="Challenge: These headings are out of order and need to be placed back into the correct order to pass WCAG 2.1 AA compliance.  Fix the headings to make them WCAG 2.1 AA compliant. Use the accessibility-heading-order.spec.js file to create your new test."
                    className="heading-order-challenge-link"
                    linkText="Challenge"
                >
                    <ChallengeIcon />
                </DynamicLinkText>
            </Section>
            <ContrastTargetContainer>
                <Target id="contrast-target" ref={contrastRef} />
                <InfoLink
                    id="link-17"
                    href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    messageChildren={
                        <strong>
                            <pre>
                                HINT: Go to w3.org to learn more about success criterion for
                                contrast...
                            </pre>
                        </strong>
                    }
                    title="Click this link to go to w3.org to learn more about success criterion for
                                contrast."
                    className="references-link"
                    target="_blank"
                >
                    <ResourcesIcon />
                </InfoLink>
            </ContrastTargetContainer>
            <Section
                id="color-contrast-section"
                className="Color-contrast-section"
                dataCy="color-contrast-section"
            >
                <Header
                    id="header-color-contrast-section"
                    className="Header-color-contrast-section"
                    dataCy="header-color-contrast-section"
                >
                    <ButtonIconDropdown
                        id="color-contrast-exercise-learn-button"
                        className="learn-button Color-contrast-exercise-learn-button"
                        headingChildren={'Why is this important'}
                        iconChildren={<InnovationIcon />}
                        dataCy="color-contrast-exercise-learn-button"
                    >
                        <InstructionsContainer>
                            <InstructionsParagraph className="heading-order-learn-button-instructions">
                                Contrast and color use are vital to accessibility. Users, including
                                users with visual disabilities, must be able to perceive content on
                                the page. There is a great deal of fine print and complexity within
                                the Web Content Accessibility Guidelines (WCAG) 2 that can easily
                                confuse web content creators and web accessibility evaluators. Here
                                are some terms and principles needed to understand WCAG 2
                                requirements for contrast and color.
                            </InstructionsParagraph>
                            <InstructionsParagraph className="heading-order-learn-button-instructions">
                                In WCAG 2, contrast is a measure of the difference in perceived{' '}
                                <strong>luminance or brightness</strong> between two colors (the
                                phrase "color contrast" is never used).
                            </InstructionsParagraph>
                            <InstructionsParagraph>
                                This brightness difference is expressed as a ratio ranging from{' '}
                                <strong>1:1</strong> (e.g.{' '}
                                <strong>white text on a white background</strong> ) to{' '}
                                <strong>21:1</strong> (e.g.,{' '}
                                <strong>black text on a white background</strong>).
                            </InstructionsParagraph>
                        </InstructionsContainer>
                    </ButtonIconDropdown>

                    <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                        Accessibility with Contrast Ratio
                    </H1>
                </Header>
                <InstructionsContainer className="Instructions-container color-contrast-instructions-container">
                    <InstructionsParagraph className="section-instructions">
                        Choose a swatch from the <strong>Aurora swatch collection</strong> OR use
                        the inputs to search for a custom color for{' '}
                        <strong>background color</strong> then, change the{' '}
                        <strong>font color</strong> the same way.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        Once you have chosen your colors, open a{' '}
                        <strong>second terminal window</strong>, make sure you are{' '}
                        <strong>still within</strong> the cypress-playground root folder then, run
                        this command within the <strong>second terminal window</strong>:{' '}
                    </InstructionsParagraph>
                    <strong>
                        <code>
                            <pre>npm run pa11y:axe</pre>
                        </code>
                    </strong>
                    <InstructionsParagraph className="section-instructions">
                        This will keep you on the current localhost:8080 window while running the{' '}
                        <strong>pa11y</strong> tests. Pa11y runs on the current browser window and
                        runs accessibility tests directly within that page's UI. You will be able to
                        see the readout within that <strong>second terminal window</strong>. (You
                        may need to scroll up within the terminal window to see the{' '}
                        <strong>pa11y</strong> errors).
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        Continue to change the <strong>background color</strong> and the{' '}
                        <strong>font color</strong> and then run the{' '}
                        <strong>npm run pa11y:axe</strong> command a few different times. You will
                        be able to see the results of each color change combinations within that{' '}
                        <strong>second terminal window</strong> each time.
                    </InstructionsParagraph>
                </InstructionsContainer>
                <ColorPickerDynamic
                    id="color-contrast-dynamic-picker"
                    className="Color-contrast-dynamic-picker"
                    dataCy="color-contrast-dynamic-background-picker"
                >
                    <ColorPickerAuroraText
                        id="color-contrast-aurora-text-picker"
                        className="Color-contrast-aurora-text-picker"
                        dataCy="color-contrast-aurora-text-picker"
                    >
                        <Div
                            id="h1-color-contrast-container"
                            className="Div Color-contrast-container H1-contrast color-contrast-text-container"
                            dataCy="h1-color-contrast-div"
                        >
                            <H1
                                id="heading-1-color-contrast"
                                className="Heading-1"
                                dataCy="heading-1-color-contrast"
                            >
                                Change the font color &nbsp;:-)
                            </H1>
                        </Div>
                    </ColorPickerAuroraText>
                </ColorPickerDynamic>
                <LinkContainer className="contrast-ratio-link-container">
                    <VisibleInfoLink
                        id="link-18"
                        href="https://webaim.org/articles/contrast/"
                        messageChildren={
                            'Go to WebAIM to learn more about contrast and how having a non WCAG 2.1 AA compliant contrast can negatively effect users.'
                        }
                        title="Click this link to go to WebAIM to learn more about Contrast and how having a non WCAG 2.1 AA compliant contrast can negatively effect users."
                        className="contrast-ratio-reference-link"
                    >
                        <SolutionIcon />
                    </VisibleInfoLink>
                    <VisibleInfoLink
                        id="link-19"
                        href="https://webaim.org/articles/contrast/#ratio"
                        messageChildren={
                            'Go to WebAIM to learn more about Contrast Ratio and how use accessible contrast ratio guidelines to create a better web application.'
                        }
                        title="Click this link to go to WebAIM to learn more about Contrast Ratio and how use accessible contrast ratio guidelines to create a better web application."
                        className="contrast-ratio-reference-link"
                    >
                        <InnovationIcon />
                    </VisibleInfoLink>
                </LinkContainer>
                <DynamicLinkText
                    id="link-20"
                    href="javascript:void(0)"
                    messageChildren={
                        'Using the Aurora swatch palette provided in the swatches section of the color pickers, find 10 sets of contrast ratios that pass WCAG 2.1 AA for background color to font color. Use the accessibility-color-contrast.spec.js to write your new test.'
                    }
                    title="Challenge: Using the Aurora swatch palette provided in the swatches section of the color pickers, find 10 sets of contrast ratios that pass WCAG 2.1 AA for background color to font color. Use the accessibility-color-contrast.spec.js to write your new test."
                    className="font-color-contrast-ratio-challenge-link"
                    linkText="Challenge"
                >
                    <ChallengeIcon />
                </DynamicLinkText>
            </Section>
            <FontSizeTargetContainer>
                <Target id="font-size-target" ref={fontSizeRef} />
                <InfoLink
                    id="link-21"
                    href="https://www.w3.org/WAI/tutorials/page-structure/styling/"
                    messageChildren={
                        <strong>
                            <pre>
                                HINT: Go to w3.org to learn more about page structure as it relates
                                to styling and Font Sizes...
                            </pre>
                        </strong>
                    }
                    title="Click this link to go to w3.org to learn more about page structure as it relates to styling and Font Sizes."
                    className="references-link"
                    target="_blank"
                >
                    <ResourcesIcon />
                </InfoLink>
            </FontSizeTargetContainer>
            <Section
                id="color-contrast-font-size-section"
                className="Color-contrast-font-size-section"
                dataCy="color-contrast-font-size-section"
            >
                <Header
                    id="header-color-contrast-font-size-section"
                    className="Header-color-contrast-font-size-section"
                    dataCy="header-color-contrast-font-size-section"
                >
                    <ButtonIconDropdown
                        id="color-contrast-font-exercise-learn-button"
                        className="learn-button color-contrast-font-exercise-learn-button"
                        headingChildren={'Why is this important?'}
                        iconChildren={<IdeaIcon />}
                        dataCy="color-contrast-font-exercise-learn-button"
                    >
                        <InstructionsContainer>
                            <InstructionsParagraph className="heading-order-learn-button-instructions">
                                <strong>Typefaces</strong> are groups of designed text characters,
                                such as <strong>Arial, Helvetica</strong>, and{' '}
                                <strong>Times New Roman</strong>.
                            </InstructionsParagraph>
                            <InstructionsParagraph>
                                <strong>Fonts</strong> are <strong>sub-sets</strong> of typefaces
                                that have a consistent appearance, such as a 14 point and bold font
                                in the Arial typeface. Typography—how typefaces and fonts present
                                text—is very impactful on reading, which is a core component of
                                visual accessibility.
                            </InstructionsParagraph>
                            <InstructionsParagraph className="heading-order-learn-button-instructions">
                                <strong>WCAG 2.0 AA</strong> requires a contrast ratio of at least{' '}
                                <strong>4.5:1</strong> for <strong>normal text</strong> and{' '}
                                <strong>3:1</strong> for <strong>large text</strong>.
                            </InstructionsParagraph>
                            <InstructionsParagraph>
                                <strong>WCAG 2.1</strong> requires a contrast ratio of at least{' '}
                                <strong>3:1</strong> for{' '}
                                <strong>graphics and user interface components</strong> (such as
                                form input borders).
                            </InstructionsParagraph>
                            <InstructionsParagraph>
                                <strong>WCAG 2.1 AAA</strong> Level requires a contrast ratio of at
                                least <strong>7:1</strong> for <strong>normal text</strong> and
                                <strong>4.5:1</strong> for <strong>large text</strong>.
                            </InstructionsParagraph>
                            <InstructionsParagraph>
                                <strong>Colorzilla</strong> is an excellent tool for extracting the
                                color value from any page element. Additionally,{' '}
                                <strong>WAVE</strong> can analyze contrast ratios for all page text
                                elements at once.
                            </InstructionsParagraph>
                        </InstructionsContainer>
                    </ButtonIconDropdown>

                    <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                        Accessibility with Contrast Ratio and Font Size Exercise
                    </H1>
                </Header>
                <InstructionsContainer className="Instructions-container color-contrast-font-size-instructions-container">
                    <InstructionsParagraph className="section-instructions">
                        Below you will see the official <strong>Aurora font sizes</strong> within
                        this section starting from largest to smallest.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        Choose a swatch from the <strong>Aurora swatch collection</strong> OR use
                        the inputs to search for a custom color for <strong>font color</strong>{' '}
                        then, change the <strong>background color</strong> to see differences with
                        contrast ratio combined with the <strong>Aurora font sizes</strong>.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        Once you have chosen your colors, open a{' '}
                        <strong>second terminal window</strong>, make sure you are{' '}
                        <strong>still within</strong> the cypress-playground root folder then, run
                        this command within the <strong>second terminal window</strong>:{' '}
                    </InstructionsParagraph>
                    <strong>
                        <code>
                            <pre>npm run pa11y:axe</pre>
                        </code>
                    </strong>
                    <InstructionsParagraph className="section-instructions">
                        This will keep you on the current localhost:8080 window while running the{' '}
                        <strong>pa11y</strong> tests. Pa11y runs on the current browser window and
                        runs accessibility tests directly within that page's UI. You will be able to
                        see the readout within that <strong>second terminal window</strong>. (You
                        may need to scroll up within the terminal window to see the{' '}
                        <strong>pa11y</strong> errors).
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        Continue to change the <strong>background color</strong> and the{' '}
                        <strong>font color</strong> and then run the{' '}
                        <strong>npm run pa11y:axe</strong> command a few different times. You will
                        be able to see the results of each color change combinations within that{' '}
                        <strong>second terminal window</strong> each time.
                    </InstructionsParagraph>
                </InstructionsContainer>
                <ColorPickerDynamic
                    id="color-contrast-h1-picker"
                    className="Color-contrast-h1-picker"
                    dataCy="color-contrast-h1-picker"
                >
                    <ColorPickerAuroraText
                        id="color-contrast-h1-swatch-picker"
                        className="Color-contrast-h1-swatch-picker"
                        dataCy="color-contrast-h1-swatch-picker"
                    >
                        <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                            44px
                        </H1>
                        <H2 id="heading-2" className="Heading-2" dataCy="heading-2">
                            36px
                        </H2>
                        <H3 id="heading-3" className="Heading-3" dataCy="heading-3">
                            28px
                        </H3>
                        <H4 id="heading-4" className="Heading-4" dataCy="heading-4">
                            24px
                        </H4>
                        <H5 id="heading-5" className="Heading-5" dataCy="heading-5">
                            20px
                        </H5>
                        <H6 id="heading-6" className="Heading-6" dataCy="heading-6">
                            16px
                        </H6>
                        <H6 id="heading-7" className="Heading-7" dataCy="heading-7">
                            14px
                        </H6>
                        <H6 id="heading-8" className="Heading-8" dataCy="heading-8">
                            12px
                        </H6>
                    </ColorPickerAuroraText>
                </ColorPickerDynamic>
                <LinkContainer className="font-color-contrast-ratio-link-container">
                    <VisibleInfoLink
                        id="link-22"
                        href="https://webaim.org/techniques/fonts/"
                        messageChildren={'Go to WebAIM to learn more about Typefaces and Fonts.'}
                        title="Click this link to go to WebAIM to learn more about Typefaces and Fonts."
                        className="font-color-contrast-ratio-reference-link"
                    >
                        <SolutionIcon />
                    </VisibleInfoLink>
                    <VisibleInfoLink
                        id="link-23"
                        href="https://webaim.org/techniques/textlayout/"
                        messageChildren={
                            'Go to WebAIM to learn more about Text Layout combined with Typefaces and Fonts.'
                        }
                        title="Click this link to go to WebAIM to learn more about Text Layout combined with Typefaces and Fonts."
                        className="font-color-contrast-ratio-reference-link"
                    >
                        <InnovationIcon />
                    </VisibleInfoLink>
                    <VisibleInfoLink
                        id="link-24"
                        href="https://webaim.org/resources/contrastchecker/"
                        messageChildren={'Go to WebAIM to learn more about Contrast Checking.'}
                        title="Click this link to go to WebAIM to learn more about Contrast Checking."
                        className="font-color-contrast-ratio-reference-link"
                    >
                        <IdeaIcon />
                    </VisibleInfoLink>
                </LinkContainer>
                <DynamicLinkText
                    id="link-25"
                    href="javascript:void(0)"
                    messageChildren={
                        'Using the Aurora swatch palette, find 5 sets of contrast ratios that pass WCAG 2.1 AA for all font sizes. Use the accessibility-font-size-color-contrast.spec.js to write your new tests.'
                    }
                    title="Challenge: Using the Aurora swatch palette, find 5 sets of contrast ratios that pass WCAG 2.1 AA for all font sizes. Use the accessibility-font-size-color-contrast.spec.js to write your new tests."
                    className="font-color-contrast-ratio-challenge-link"
                    linkText="Challenge"
                >
                    <ChallengeIcon />
                </DynamicLinkText>
            </Section>
            <ReferencesTargetContainer>
                <Target id="reference-target" ref={referencesRef} />
                <InfoLink
                    id="link-26"
                    href="javascript:void(0)"
                    messageChildren={
                        <strong>
                            <pre>
                                HINT: There are a good amount of resource links below supplied to
                                you for use as references. Don't forget to take a look...
                            </pre>
                        </strong>
                    }
                    title="There are a good amount of resource links below supplied to you for use as references.  Click the References link within the header to be taken to the Extra References section OR scroll down to the Extra References section."
                    className="references-link"
                >
                    <ResourcesIcon />
                </InfoLink>
            </ReferencesTargetContainer>
            <Section
                id="references-section"
                className="References-section"
                dataCy="references-section"
            >
                <Header
                    id="header-references-section"
                    className="Header-references-section"
                    dataCy="header-references-section"
                >
                    <ButtonIconDropdown
                        id="references-learn-button"
                        className="learn-button references-learn-button"
                        headingChildren={'Why is this important'}
                        iconChildren={<ResourcesIcon />}
                        dataCy="references-learn-button"
                    >
                        <InstructionsContainer>
                            <InstructionsParagraph className="heading-order-learn-button-instructions">
                                Designing and developing for an <strong>accessible web</strong>{' '}
                                presence is an extremely important philosophy for creating web and
                                mobile experiences that everyone can use. This list of references
                                can give you a good introduction into the world of accessible web.
                            </InstructionsParagraph>
                            <InstructionsParagraph className="heading-order-learn-button-instructions">
                                This list consists of all of the reference links I used to create
                                this repo AND extra links for your own research. Use this research
                                to embark on the final challenge listed below if you so choose.
                            </InstructionsParagraph>
                        </InstructionsContainer>
                    </ButtonIconDropdown>
                    <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                        Extra References
                    </H1>
                </Header>
                <InstructionsContainer className="Instructions-container color-contrast-instructions-container">
                    <strong>
                        <pre>All of the references below were used to create this repo...</pre>
                    </strong>
                </InstructionsContainer>

                <LinkContainer className="references-link-container">
                    <InfoLink
                        id="link-27"
                        href="https://www.w3.org/WAI/test-evaluate/preliminary/"
                        messageChildren={
                            'Go to w3.org to learn more about doing a preliminary checklist for accessibility.'
                        }
                        title="Click this link to go to w3.org to learn more about doing a preliminary checklist for accessibility."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-28"
                        href="https://www.w3.org/WAI/tutorials/forms/"
                        messageChildren={
                            'Go to w3.org to learn more about forms and how you can make them accessible.'
                        }
                        title="Click this link to go to w3.org to learn more about forms and how you can make them accessible."
                        className="references-reference-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-29"
                        href="https://webaim.org/techniques/semanticstructure/#nature"
                        messageChildren={
                            'Go to WebAIM to learn more about how to use correct DOM structure to make your web presence accessible.'
                        }
                        title="Click this link to go to WebAIM to learn more about how to use correct DOM structure to make your web presence accessible."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-30"
                        href="https://webaim.org/articles/contrast/"
                        messageChildren={
                            'Go to WebAIM to learn more about how proper color contrast ratio to make your web presence accessible.'
                        }
                        title="Click this link to go to WebAIM to learn more about how proper color contrast ratio to make your web presence accessible."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-31"
                        href="https://webaim.org/techniques/fonts/"
                        messageChildren={
                            'Go to WebAIM to learn more about how Typefaces and Fonts can be used to make your web presence accessible.'
                        }
                        title="Click this link to go to WebAIM to learn more about how Typefaces and Fonts can be used to make your web presence accessible."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-32"
                        href="https://webaim.org/techniques/textlayout/"
                        messageChildren={
                            'Go to WebAIM to learn more about how Text Layout can be used to make your web presence accessible.'
                        }
                        title="Click this link to go to WebAIM to learn more about how Text Layout can be used to make your web presence accessible."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-33"
                        href="https://webaim.org/resources/contrastchecker/"
                        messageChildren={
                            'Go to WebAIM to learn more about how to use color contrast checkers to make your web presence accessible.'
                        }
                        title="Click this link to go to WebAIM to learn more about how to use color contrast checkers to make your web presence accessible."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-34"
                        href="https://webaim.org/projects/screenreadersurvey8/"
                        messageChildren={
                            'Go to WebAIM to learn more about one of their screen reader surveys.'
                        }
                        title="Click this link to go to WebAIM to learn more about one of their screen reader surveys."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-35"
                        href="https://plewis.pages.corp.indeed.com/a11y-checklists/"
                        messageChildren={
                            "Go to Indeed's accesibility checklist to make your web presence accessible."
                        }
                        title="Click this link to go to Indeed's accesibility checklist to make your web presence accessible."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-36"
                        href="https://docs.google.com/presentation/d/116f0Up83qDONgrN_62sSxXRNnoE3A-BWCLsR2F2-Aag/edit#slide=id.g80d03e662f_0_175"
                        messageChildren={
                            "Go to Indeed's WCAG 2.1 training slide deck to learn more about Indeed's philosophy on accessibility."
                        }
                        title="Click this link to go to Indeed's WCAG 2.1 training slide deck to learn more about Indeed's philosophy on accessibility."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-37"
                        href="https://wiki.indeed.com/pages/viewpage.action?spaceKey=a11y&title=Accessibility+FAQ"
                        messageChildren={
                            "Go to Indeed's Accessibility Frequently Asked Questions wiki page in confluence."
                        }
                        title="Click this link to go to Indeed's Accessibility Frequently Asked Questions wiki page in confluence."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-38"
                        href="https://wiki.indeed.com/display/a11y/Accessibility+testing+with+axe-core"
                        messageChildren={
                            "Go to Indeed's Accessibility testing with axe-core wiki page in confluence."
                        }
                        title="Click this link to go to Indeed's Accessibility testing with axe-core wiki page in confluence."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-39"
                        href="https://wiki.indeed.com/display/a11y/DEG+Accessibility"
                        messageChildren={
                            "Go to Indeed's Delivery Engineering Accessibility Hub wiki page in confluence."
                        }
                        title="Click this link to go to Indeed's Delivery Engineering Accessibility Hub wiki page in confluence."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-40"
                        href="https://openbase.io/js/cypress-axe/documentation"
                        messageChildren={
                            'Go to openbase and read about cypress-axe and axe-core install and implementation docs.'
                        }
                        title="Click this link to go to openbase and read about cypress-axe and axe-core install and implementation docs."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-41"
                        href="https://blog.sapegin.me/til/testing/detecting-accessibility-issues-on-ci-with-cypress-axe/"
                        messageChildren={
                            "Go to Artem Sapegin's blog and read about cypress-axe/ axe-core and how to detect and run the tests within the GUI."
                        }
                        title="Click this link to go to Artem Sapegin's blog and read about cypress-axe/ axe-core and how to detect and run the tests within the GUI."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-42"
                        href="https://vanslaars.io/blog/introducing-cypress-axe/"
                        messageChildren={
                            "Go to Andy Van Slaars's blog and read an introduction to cypress-axe."
                        }
                        title="Click this link to go to Andy Van Slaars's blog and read an introduction to cypress-axe."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-43"
                        href="https://inclusive-components.design/"
                        messageChildren={
                            'Go to the Inclusive Components blog and read more about accessibility and components.'
                        }
                        title="Click this link to go to the Inclusive Components blog and read more about accessibility and components."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-44"
                        href="https://www.sitepoint.com/automated-accessibility-checking-with-axe/"
                        messageChildren={
                            'Go to Sitepoint blog and read more about automated accessibility checking with axe.'
                        }
                        title="Click this link to go to Sitepoint blog and read more about automated accessibility checking with axe."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-45"
                        href="https://timdeschryver.dev/blog/setting-up-cypress-with-axe-for-accessibility"
                        messageChildren={
                            "Go to Tim Deschryver's blog and read more about setting up Cypress with AXE for accessibility."
                        }
                        title="Click this link to go to Tim Deschryver's blog and read more about setting up Cypress with AXE for accessibility."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-46"
                        href="https://developer.aliyun.com/mirror/npm/package/eslint-plugin-jsx-a11y"
                        messageChildren={
                            'Go learn about eslint-plugin-jsx-a11y static AST checker for accessibility rules on JSX elements.'
                        }
                        title="Click this link to go learn about eslint-plugin-jsx-a11y static AST checker for accessibility rules on JSX elements."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-47"
                        href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y"
                        messageChildren={
                            'Go to the GitHub repo about eslint-plugin-jsx-a11y rules and how to use them within an application.'
                        }
                        title="Click this link to go to the GitHub repo about eslint-plugin-jsx-a11y rules and how to use them within an application."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-48"
                        href="https://reactjs.org/docs/accessibility.html"
                        messageChildren={
                            'Go to the ReactJs website to learn about how they accomodate for accessibility.'
                        }
                        title="Click this link to go to the ReactJs website to learn about how they accomodate for accessibility."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-49"
                        href="https://github.com/dequelabs/axe-core"
                        messageChildren={
                            'Go to the deque labs GitHub repo to learn about axe-core.'
                        }
                        title="Click this link to go to the deque labs GitHub repo to learn about axe-core."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-50"
                        href="https://www.deque.com/axe/core-documentation/api-documentation/#parameters-axerun"
                        messageChildren={
                            'Go to the deque labs API documentation to learn more about AXE technologies and how to configure them.'
                        }
                        title="Click this link to go to the deque labs API documentation to learn more about AXE technologies and how to configure them."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-51"
                        href="https://www.deque.com/blog/how-to-test-for-accessibility-with-cypress/"
                        messageChildren={
                            "Go to the deque labs blog to learn more about how to test for accessibility with Cypress while intergating axe-core into your project. Chrome is buggy with this site currently and they are working on it...try another browser if Chrome doesn't work."
                        }
                        title="Click this link to go to the deque labs blog to learn more about how to test for accessibility with Cypress while intergating axe-core into your project. Chrome is buggy with this site currently and they are working on it...try another browser if Chrome doesn't work."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-52"
                        href="https://www.deque.com/blog/introducing-axe-linter/"
                        messageChildren={
                            "Go to the deque labs blog to learn more about their new Automated Source Code Accessibility Checker. Chrome is buggy with this site currently and they are working on it...try another browser if Chrome doesn't work."
                        }
                        title="Click this link to go to the deque labs blog to learn more about their new Automated Source Code Accessibility Checker. Chrome is buggy with this site currently and they are working on it...try another browser if Chrome doesn't work."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                    <InfoLink
                        id="link-53"
                        href="https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell"
                        messageChildren={
                            'Go to Cypress.io to learn everything you need to know about Cypress.  The docs are exstensive and always updated with current info.'
                        }
                        title="Click this link to go to Cypress.io to learn everything you need to know about Cypress.  The docs are exstensive and always updated with current info."
                        className="references-link"
                        target="_blank"
                    >
                        <ResourcesIcon />
                    </InfoLink>
                </LinkContainer>
            </Section>
            <FinalChallengeTargetContainer>
                <Target id="final-challenge-target" ref={finalChallengeRef} />
                <InfoLink
                    id="link-54"
                    href="javascript:void(0)"
                    messageChildren={
                        <strong>
                            <pre>
                                HINT: There is a Final Challenge below for you to test what you have
                                learned so far. Test your new skills...
                            </pre>
                        </strong>
                    }
                    title="There is a Final Challenge below for you to test the skills that you have learned so far. Challenge yourself and test your new skills.  Click the Final Challenge link within the header to be taken to the Final Challenge section OR scroll down to the Final Challenge section."
                    className="references-link"
                >
                    <ResourcesIcon />
                </InfoLink>
            </FinalChallengeTargetContainer>
            <Section
                id="final-challenge-section"
                className="Final-challenge-section"
                dataCy="final-challenge-section"
            >
                <Header
                    id="header-final-challenge-section"
                    className="Header-final-challenge-section"
                    dataCy="header-final-challenge-section"
                >
                    <ButtonIconDropdown
                        id="final-challenge-learn-button"
                        className="learn-button form-exercise-learn-button"
                        headingChildren={'Why is this important'}
                        iconChildren={<ComputerWithCap />}
                        dataCy="final-challenge-learn-button"
                    >
                        <InstructionsContainer>
                            <InstructionsParagraph className="heading-order-learn-button-instructions">
                                Designing and developing for an <strong>accessible web</strong>{' '}
                                presence is an extremely important philosophy for creating web and
                                mobile experiences that everyone can use. This list of references
                                can give you a good introduction into the world of accessible web.
                            </InstructionsParagraph>
                            <InstructionsParagraph className="heading-order-learn-button-instructions">
                                This list consists of all of the reference links I used to create
                                this repo AND extra links for your own research. Use this research
                                to embark on the final challenge listed below if you so choose.
                            </InstructionsParagraph>
                        </InstructionsContainer>
                    </ButtonIconDropdown>
                    <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                        Final Challenge
                    </H1>
                </Header>
                <InstructionsContainer className="Instructions-container color-contrast-instructions-container">
                    <strong>
                        <pre>Here's your Final Challenge so do your best and...have fun!</pre>
                    </strong>
                </InstructionsContainer>

                <Div
                    id="challenge-div-parent-container"
                    className="Challenge-div-parent-container"
                    dataCy="challenge-div-parent-container"
                >
                    <Div
                        id="challenge-div-container"
                        className="Challenge-div-container"
                        dataCy="challenge-div-container"
                    >
                        <Div
                            id="challenge-div-icons-container"
                            className="Challenge-div-icons-container"
                            dataCy="challenge-div-icons-container"
                        >
                            <ChallengeIconLarge />
                        </Div>

                        <InstructionsContainer className="Instructions-container color-contrast-instructions-container">
                            <InstructionsParagraph className="final-challenge-instructions">
                                Through out your journey using this repo, you have learned a better
                                understanding of <strong>Accessible Web</strong> through learning
                                about each section topic. You worked on section topic challenges to
                                gain understanding related to how to create, and test components and
                                websites using <strong>Cypress</strong>, <strong>AXE-Core</strong>,{' '}
                                <strong>pa11y</strong> and <strong>pa11y-axe</strong>.{' '}
                            </InstructionsParagraph>
                            <InstructionsParagraph className="final-challenge-instructions">
                                <strong>Now</strong> that you have gained more insight into what it
                                takes to create an <strong>Accessible Web</strong> presence on the
                                internet, here is your challenge...should you choose to accept it.
                            </InstructionsParagraph>
                            <InstructionsParagraph className="final-challenge-instructions">
                                <strong>
                                    <pre>Fix this Application...</pre>
                                </strong>
                            </InstructionsParagraph>
                            <InstructionsParagraph className="final-challenge-instructions">
                                This application was designed and developed to <strong>NOT</strong>{' '}
                                fully satisfy <strong>Accessible Web</strong> compliance. It's
                                navigable and usable from an Individual's perspective but needs more
                                work to make it WCAG 2.1 AA compliant. I challenge you... take what
                                you have learned and use your creativity to re-design and re-develop
                                this application to make it successfully tested for an{' '}
                                <strong>Accessible Web</strong> from your perspective.
                            </InstructionsParagraph>
                            <InstructionsParagraph>
                                Once you have completed your work, contact me with the contact-info
                                provided within the <strong>README.md</strong> so we can look at
                                what you have worked on together.
                            </InstructionsParagraph>
                            <InstructionsParagraph className="final-challenge-instructions">
                                <strong>
                                    <pre>
                                        I can't wait to see what you accomplish while using your
                                        creativity, ingenuity and new found skills :-)
                                    </pre>
                                </strong>
                            </InstructionsParagraph>
                        </InstructionsContainer>
                    </Div>
                </Div>
            </Section>
            <Pa11yReportTargetContainer>
                <Target id="error-section-target" ref={pa11yReportsRef} />
                <InfoLink
                    id="link-55"
                    href="javascript:void(0)"
                    messageChildren={
                        <strong>
                            <pre>
                                HINT: Take a look at the error reporting below to see accessibility
                                application errors...
                            </pre>
                        </strong>
                    }
                    title="Take a look at the error reporting below to see accessibility application errors."
                    className="references-link"
                >
                    <ResourcesIcon />
                </InfoLink>
            </Pa11yReportTargetContainer>
            <Section
                id="pa11y-reports-section"
                className="Introduction-section"
                dataCy="pa11y-reports-section"
            >
                <H2
                    id="introduction-heading"
                    className="section-heading Introduction-heading  heading-2"
                    dataCy="introduction-heading"
                >
                    <Div id="logo-container" className="Logo-container" dataCy="logo-container">
                        <LearnIcon />
                    </Div>
                    Error Report Data
                </H2>
                <ReportsContainer>
                    <MyData />
                </ReportsContainer>
            </Section>
        </AppContainer>
    );
};
const ErrorRuleParentContainer = styled.div`
    color: #ffffff;
`;
const ErrorRuleContainer = styled.div`
    padding: 1rem 1.5rem;
    background-color: #051930;
    margin: 1rem 0;
    border-radius: 0.25rem;
`;
const ErrorRuleHtmlContainer = styled.pre`
    color: #2ddfff;
    background-color: #030619;
    padding: 1rem 1.5rem;
    white-space: pre-wrap;
`;
const ErrorRuleCodeContainer = styled.code``;
const ErrorRuleSummaryFailureContainer = styled.code``;
const HomeTargetContainer = styled.div`
    height: 14rem;
`;
const IntroTargetContainer = styled.div`
    height: 9rem;
    @media (max-width: 1475px) {
        height: 13rem;
    }
`;
const FormsTargetContainer = styled.div`
    height: 17rem;
    padding: 0 6rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    @media (max-width: 1475px) {
        height: 26rem;
    }
    & .references-link {
        height: 10rem;
        padding: 2rem 0.75rem;
        width: 100%;
        border-radius: 0.5rem;
        & strong {
            color: #eeeeee;
            & pre {
                font-size: 1.5rem;
                letter-spacing: 1.5px;
                padding: 0.5rem 0;
                white-space: pre-wrap;
            }
        }
        & .Link-message-container {
            width: inherit;
        }
    }
`;
const HeadingsTargetContainer = styled.div`
    height: 17rem;
    padding: 0 6rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    @media (max-width: 1475px) {
        height: 26rem;
    }
    & .references-link {
        height: 10rem;
        padding: 2rem 0.75rem;
        width: 100%;
        border-radius: 0.5rem;
        & strong {
            color: #eeeeee;
            & pre {
                font-size: 1.5rem;
                letter-spacing: 1.5px;
                padding: 0.5rem 0;
                white-space: pre-wrap;
            }
        }
        & .Link-message-container {
            width: inherit;
        }
    }
`;
const ContrastTargetContainer = styled.div`
    height: 17rem;
    padding: 0 6rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    @media (max-width: 1475px) {
        height: 26rem;
    }
    & .references-link {
        height: 10rem;
        padding: 2rem 0.75rem;
        width: 100%;
        border-radius: 0.5rem;
        & strong {
            color: #eeeeee;
            & pre {
                font-size: 1.5rem;
                letter-spacing: 1.5px;
                padding: 0.5rem 0;
                white-space: pre-wrap;
            }
        }
        & .Link-message-container {
            width: inherit;
        }
    }
`;
const FontSizeTargetContainer = styled.div`
    height: 17rem;
    padding: 0 6rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    @media (max-width: 1475px) {
        height: 26rem;
    }
    & .references-link {
        height: 10rem;
        padding: 2rem 0.75rem;
        width: 100%;
        border-radius: 0.5rem;
        & strong {
            color: #eeeeee;
            & pre {
                font-size: 1.5rem;
                letter-spacing: 1.5px;
                padding: 0.5rem 0;
                white-space: pre-wrap;
            }
        }
        & .Link-message-container {
            width: inherit;
        }
    }
`;
const ReferencesTargetContainer = styled.div`
    height: 17rem;
    padding: 0 6rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    @media (max-width: 1475px) {
        height: 26rem;
    }
    & .references-link {
        height: 10rem;
        padding: 2rem 0.75rem;
        width: 100%;
        border-radius: 0.5rem;
        & strong {
            color: #eeeeee;
            & pre {
                font-size: 1.5rem;
                letter-spacing: 1.5px;
                padding: 0.5rem 0;
                white-space: pre-wrap;
            }
        }
        & .Link-message-container {
            width: inherit;
        }
    }
`;
const FinalChallengeTargetContainer = styled.div`
    height: 17rem;
    padding: 0 6rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    @media (max-width: 1475px) {
        height: 26rem;
    }
    & .references-link {
        height: 10rem;
        padding: 2rem 0.75rem;
        width: 100%;
        border-radius: 0.5rem;
        & strong {
            color: #eeeeee;
            & pre {
                font-size: 1.5rem;
                letter-spacing: 1.5px;
                padding: 0.5rem 0;
                white-space: pre-wrap;
            }
        }
        & .Link-message-container {
            width: inherit;
        }
    }
`;
const Pa11yReportTargetContainer = styled.div`
    height: 15rem;
    padding: 0 6rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    @media (max-width: 1475px) {
        height: 24rem;
    }
    & .references-link {
        height: 10rem;
        padding: 2rem 0.75rem;
        width: 100%;
        border-radius: 0.5rem;
        & strong {
            color: #eeeeee;
            & pre {
                font-size: 1.5rem;
                letter-spacing: 1.5px;
                padding: 0.5rem 0;
                white-space: pre-wrap;
            }
        }
        & .Link-message-container {
            width: inherit;
        }
    }
`;
const Target = styled.div`
    width: 0;
    height: 0;
    border: none;
    padding: 0;
    margin: 0;
`;

const NavContainer = styled.nav`
    background-color: #0c2e5e;
    display: grid;
    grid-template-columns: repeat(8, auto);
    grid-template-rows: repeat(1, auto);
    column-gap: 1.5rem;
    row-gap: 1.5rem;
    padding: 1.5rem;
    & .Link-parent-container {
        justify-content: space-around;
    }
`;

const LinkContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    & .Link-parent-container {
        margin-right: 1.5rem;
    }
`;

const ReportsContainer = styled.div`
    background-color: #0a2247;
    padding: 1rem 1.5rem;
    border-radius: 0.25rem;
`;

const InstructionsContainer = styled.div`
    background-color: #051830;
    padding: 1rem 0.5rem;
    border-radius: 0.25rem;
    & strong {
        color: #2ddfff;
        & code {
            & pre {
                font-size: 1.5rem;
                letter-spacing: 1.5px;
                padding: 0.5rem 2rem;
                white-space: pre-wrap;
            }
        }
        & pre {
            font-size: 2rem;
            letter-spacing: 1.5px;
            padding: 0.5rem 0;
            white-space: pre-wrap;
        }
    }
`;

const InstructionsParagraph = styled.p`
    font-size: 1.25rem;
    color: #ffffff;
    letter-spacing: 0.5px;
    font-weight: 300;
    margin: 1rem;
    line-height: 1.3;
`;

const AppContainer = styled.section`
    font-family: Helvetica, sans-serif;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    background-color: #092347;
    & .App-header-container {
        font-size: 1.5rem;
        background-color: #051930;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        position: fixed;
        top: 0;
        z-index: 3;
        width: 100%;
        border-bottom: 1px solid black;
        box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.5);
        & .Logo-title-container {
            display: flex;
            flex-flow: row nowrap;
            background-color: #030618;
            margin: 0;
        }
        & .Logo-container {
            display: flex;
            flex-flow: row nowrap;
            padding: 1rem 1.5rem;
            margin: 0;
            & > svg {
                width: 90px;
                height: 90px;
            }
            &:hover {
                cursor: pointer;
            }
            @media (max-width: 1475px) {
                & > svg {
                    width: 40px;
                    height: 40px;
                }
            }
        }

        & .App-heading-1 {
            margin: 0;
            padding: 0 1.5rem;
            color: #ffffff;
            display: flex;
            align-items: center;
            width: 100%;
            background-color: #051930;
        }
        @media (max-width: 1475px) {
            font-size: 1rem;
            letter-spacing: 0.75px;
            flex-flow: column;
            & .nav-links-container {
                /* justify-content: space-around; */
            }
        }
    }
    @media (max-width: 1300px) {
        padding: 4rem 0 0 0;
    }
    & .Button-container {
        flex-flow: row nowrap;
        justify-content: space-between;

        & .Submit-button {
            width: 12rem;
            transition: 200ms ease-in-out;
            &:hover {
                background-color: Brown;
                border: 2px solid black;
            }
        }
        & .Reset-button {
            transition: 200ms ease-in-out;
            width: 5rem;
            background-color: transparent;
            color: darkGreen;
            border: 2px solid darkGreen;
            &:hover {
                background-color: Brown;
                border: 2px solid black;
                color: #ffffff;
            }
        }
    }
    & .Color-contrast-section,
    .Heading-order-section,
    .Form-section,
    .Introduction-section,
    .Color-contrast-font-size-section,
    .Final-challenge-section,
    .References-section {
        border: 2px solid #061831;
        background-color: #0c2e5e;
        padding: 1rem 1.5rem 2rem;
        margin: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
        min-width: 43.5rem;
        & header {
            & .Heading-1 {
                display: flex;
                align-items: center;
                color: #ffffff;
                margin: 0;
                padding: 0;
                letter-spacing: 0.5px;
                & .Button-icon-button-dropdown {
                    margin: 0 1.25rem 0 0;
                    height: 6rem;
                    min-width: 6rem;
                    width: auto;
                }
            }
        }
    }
    & .Svg-div-container-parent {
        padding: 1rem 1.5rem 0;
        width: fit-content;
        margin: auto;
        border-radius: 0.25rem;
    }
    & .Svg-div-container {
        width: fit-content;
        padding: 0 1rem;
        background-color: #0c2e5e;
        border-radius: 0.25rem;
        flex-flow: row-reverse wrap;
        & iframe {
            margin: auto;
            padding: 0 1rem;
        }
    }
    & .Introduction-section {
        & .section-heading {
            font-size: 1.75rem;
            color: #ffffff;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            background-color: #0c2e5e;
            border-radius: 0.25rem;
            margin: 0 0 1.5rem;

            & .Logo-container {
                border-radius: 0.25rem;
                background-color: #030c18;
                width: 5rem;
                height: 5rem;
                display: flex;
                align-items: center;
                justify-content: space-around;
                margin: 0 1rem 0 0;
            }
        }
    }
    & .Color-contrast-container {
        margin: 2rem 0 1.5rem;
    }
    & .Form-section {
        & .Form {
            margin: 2rem 0;
        }
        & .Header-form-section {
            font-size: 1.75rem;
            margin: 0 0 1rem 0;
            padding: 0;
            & .Heading-1 {
                margin: 0 0 0 1.5rem;
                padding: 0;
                color: #ffffff;
                letter-spacing: 0.5px;
            }
        }
        & .forms-link-container {
            margin: 0 0 1.5rem 0;
        }
    }
    & .Color-contrast-section {
        & .Header-color-contrast-section {
            margin: 0 0 1rem 0;
            padding: 0;

            & .Heading-1 {
                font-size: 1.75rem;
                margin: 0 0 0 1.5rem;
                padding: 0;
                color: #ffffff;
                letter-spacing: 0.5px;
            }
        }
        & .contrast-ratio-link-container {
            display: grid;
            grid-template-columns: repeat(2, auto);
            grid-template-rows: repeat(1, auto);
            column-gap: 1.5rem;
            row-gap: 1.5rem;
            margin: 0 0 1.5rem 0;
            & .Link-parent-container {
                margin: 0;
            }
            @media (max-width: 1500px) {
                grid-template-columns: repeat(1, auto);
                grid-template-rows: repeat(2, auto);
            }
        }
        & .Color-picker-dynamic-parent-container {
            background-color: #082347;
            margin: 2rem 0 2rem;
            padding: 2rem 1.5rem 1.5rem;
            border-radius: 0.25rem;

            & .color-picker-container {
                margin: 2rem auto;
                max-width: 50rem;
                min-width: 43rem;

                & .Color-picker-button {
                    position: absolute;
                    z-index: 1;
                    margin: -1.5rem 0;
                }

                & .color-picker-popover {
                    position: absolute;
                    margin: 0.25rem 0;
                }
                & .color-picker-aurora-text-popover {
                    margin: 4.5rem 20rem 0;
                }
                & .color-picker-dynamic-popover {
                    margin: 2.25rem 0 0;
                }
                & .color-picker-dynamic-child-container {
                    background-color: transparent;
                    & .color-picker-parent-container {
                        & .text-color-picker-container {
                            position: absolute;
                            max-width: 50rem;
                            min-width: 43rem;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                            & .color-picker-aurora-text-popover {
                                & .color-picker-aurora-text-cover {
                                    & .text-color-picker-swatch {
                                        position: absolute;
                                    }
                                }
                            }
                        }

                        & .color-picker-aurora-text-child-container {
                            border-top: 4px solid #ff581f;
                            box-shadow: 3px 10px 11px 0px rgba(0, 0, 0, 0.5);
                            & .color-contrast-text-container {
                                display: flex;
                                align-items: center;
                                justify-content: space-around;

                                & .Heading-1 {
                                    font-size: 44px;
                                }
                            }
                        }
                    }
                }
            }
            & .Color-contrast-dynamic-picker {
                background-color: transparent !important;
            }
        }

        & .Color-contrast-container {
            padding: 1.5rem;
            border-radius: 0.25rem;
            & .color-picker-parent-container {
                width: 30rem;
                margin: 2rem auto 6rem;
                & .Heading-1 {
                    font-size: 2rem;
                }
            }
            & .color-picker-container {
                flex-flow: row-reverse;
                justify-content: flex-end;

                & .Heading-1 {
                    font-size: 3rem;
                }
                & .text-color-picker-container {
                    margin: 0;
                    border: 10px solid red;
                    position: absolute;
                }
                & .color-picker-sketch {
                    height: fit-content;
                    position: absolute;
                }
            }
        }
    }
    & .Heading-order-section {
        & .Header-heading-order-section {
            font-size: 2rem;
            margin: 0 0 1rem 0;
            padding: 0;

            & .Heading-1 {
                margin: 0 0 0 1.5rem;
                padding: 0;
                color: #ffffff;
                letter-spacing: 0.5px;
            }
        }
        & .Heading-1 {
            font-size: 1.75rem;
        }
        & .Heading-order-container-div {
            padding: 1rem 1.5rem;
            border-radius: 0.25rem;
            background-color: #082347;
            margin: 2rem 0;
            & .Headings-container-div {
                background-color: #e6e6e6;
                border-radius: 0.25rem;
                padding: 0 1.5rem;
            }
        }
        & .heading-order-link-container {
            display: grid;
            grid-template-columns: repeat(2, auto);
            grid-template-rows: repeat(1, auto);
            column-gap: 1.5rem;
            row-gap: 1.5rem;
            margin: 0 0 1.5rem 0;
            & .Link-parent-container {
                margin: 0;
            }
            @media (max-width: 1500px) {
                grid-template-columns: repeat(1, auto);
                grid-template-rows: repeat(2, auto);
            }
        }
    }
    & .Color-contrast-font-size-section {
        & .Header-color-contrast-font-size-section {
            font-size: 1.75rem;
            margin: 0 0 1rem 0;
            padding: 0;

            & .Heading-1 {
                margin: 0 0 0 1.5rem;
                padding: 0;
                color: #ffffff;
                letter-spacing: 0.5px;
            }
        }
        & .Color-picker-dynamic-parent-container {
            background-color: #082347;
            margin: 2rem 0 2rem;
            padding: 2rem 1.5rem 1.5rem;
            border-radius: 0.25rem;
            & .color-picker-dynamic-popover {
                position: absolute;
                margin: 2.25rem 0 0 31.5rem;
            }
            & .color-picker-container {
                margin: 2rem auto;
                display: flex;
                flex-flow: row-reverse;
                justify-content: space-between;
                min-width: 34rem;
                border-radius: 0.25rem;
                box-shadow: 3px 10px 11px 0px rgba(0, 0, 0, 0.5);
                border-top: 4px solid #ff581f;
                & .Color-picker-button {
                    position: absolute;
                    margin: -1.75rem 0 0;
                }
                & .color-picker-aurora-text-button {
                    margin: -1.75rem 0 0;
                }
                & .color-picker-dynamic-child-container {
                    width: 100%;
                    & .color-picker-parent-container {
                        & .text-color-picker-container {
                            & .color-picker-popover {
                                position: absolute;
                                margin: 2rem 0 0;
                            }
                        }
                    }
                }
            }
        }
        & .color-picker-parent-container {
            & .color-picker-aurora-text-child-container {
                display: flex;
                justify-content: space-around;
                align-items: center;
                & .Heading-1 {
                    font-size: 2.75rem;
                }
                & .Heading-2 {
                    font-size: 2.25rem;
                }
                & .Heading-3 {
                    font-size: 1.75rem;
                }
                & .Heading-4 {
                    font-size: 1.5rem;
                }
                & .Heading-5 {
                    font-size: 1.25rem;
                }
                & .Heading-6 {
                    font-size: 1rem;
                }
                & .Heading-7 {
                    font-size: 0.875rem;
                }
                & .Heading-8 {
                    font-size: 0.75rem;
                }
            }
        }
        & .Color-contrast-container {
            background-color: #082347;
            padding: 0.5rem 1.5rem 1.5rem;
            border-radius: 0.25rem;
            width: 21rem;
            height: 30rem;

            & .color-picker-container {
                box-shadow: 0px 3px 10px -3px rgba(0, 0, 0, 0.5);
            }
        }
        & .font-color-contrast-ratio-link-container {
            display: grid;
            grid-template-columns: repeat(3, auto);
            grid-template-rows: repeat(1, auto);
            column-gap: 1.5rem;
            row-gap: 1.5rem;
            margin: 0 0 1.5rem 0;
            & .Link-parent-container {
                margin: 0;
            }
            @media (max-width: 1515px) {
                grid-template-columns: repeat(1, auto);
                grid-template-rows: repeat(3, auto);
            }
        }
    }
    & .References-section {
        & .Header-references-section {
            font-size: 1.75rem;
            margin: 0 0 1rem 0;
            padding: 0;

            & .Heading-1 {
                margin: 0 0 0 1.5rem;
                padding: 0;
                color: #ffffff;
                letter-spacing: 0.5px;
            }
        }
        & .Instructions-container {
            & strong {
                pre {
                    padding: 0 1.25rem;
                }
            }
        }
        & .references-link-container {
            background-color: #082247;
            margin: 1.5rem 0;
            padding: 1.5rem;
            border-radius: 0.25rem;
            display: grid;
            grid-template-columns: repeat(3, auto);
            grid-template-rows: repeat(2, auto);
            column-gap: 1.5rem;
            row-gap: 1.5rem;
            & .Link-parent-container {
                margin: 0;
            }
            @media (max-width: 1530px) {
                grid-template-columns: repeat(2, auto);
                grid-template-rows: repeat(2, auto);
            }
            @media (max-width: 1050px) {
                grid-template-columns: auto;
                grid-template-rows: auto;
            }
        }
        & .Heading-order-container-div {
            padding: 1rem 1.5rem;
            border-radius: 0.25rem;
            background-color: #082347;
            margin: 2rem 0;
            & .Headings-container-div {
                background-color: #e6e6e6;
                border-radius: 0.25rem;
                padding: 0 1.5rem;
            }
        }
    }
    & .Final-challenge-section {
        & .Header-final-challenge-section {
            font-size: 1.75rem;
            margin: 0 0 1rem 0;
            padding: 0;

            & .Heading-1 {
                margin: 0 0 0 1.5rem;
                padding: 0;
                color: #ffffff;
                letter-spacing: 0.5px;
            }
        }
        & .references-link-container {
            background-color: #082247;
            margin: 1.5rem 0;
            padding: 1.5rem;
            border-radius: 0.25rem;
            & .Link-parent-container {
                margin: 0;
            }
        }
        & .Challenge-div-parent-container {
            background-color: #092247;
            padding: 0 1.5rem;
        }
        & .Challenge-div-container {
            background-color: #0c2e5e;
            margin: 1.5rem 0;
            padding: 1.5rem;
            border: 2px solid #061831;
            border-radius: 0.25rem;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
            & .Challenge-div-icons-container {
                background-color: #030c18;
                border-radius: 0.25rem;
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: space-around;
                height: 10rem;
                width: 35rem;
                margin: 0 2rem 0 0.5rem;
                & svg {
                    padding: 1.5rem;
                }
            }
        }
        & .Instructions-container {
            & strong {
                pre {
                    padding: 0 1.25rem;
                }
            }
        }
    }
`;

export default App;
