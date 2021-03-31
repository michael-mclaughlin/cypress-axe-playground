import React from 'react';
import reactCSS from 'reactcss';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';
import { presetColors } from '../../../utils/preset-colors';

interface Props {
    dataCy: string;
    id: string;
    className: string;
    presetColors?: string[];
}

class ColorPickerDynamic extends React.Component<Props> {
    state = {
        displayColorPicker: false,
        color: {
            r: 230,
            g: 230,
            b: 230,
            a: 1,
        },
    };

    /** Leaving this code here in case we want dynamic rendering in the future */
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker });
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false });
    };

    handleChange = (color: any) => {
        this.setState({ color: color.rgb });
    };

    render() {
        const styles = reactCSS({
            default: {
                color: {
                    borderRadius: '0.25rem',
                    backgroundColor: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
                },
            },
        });

        const { children, id, className, dataCy } = this.props;
        return (
            <ParentContainer
                className="Color-picker-dynamic-parent-container"
                data-cy="color-picker-dynamic-parent-container"
            >
                <Container
                    className={`color-picker-container ${className}`}
                    id={id}
                    data-cy={dataCy}
                    style={styles.color}
                >
                    {this.state.displayColorPicker ? (
                        <CloseButton
                            className="Color-picker-button color-picker-dynamic-close-button"
                            data-cy={`${dataCy}-background-close-button`}
                            onClick={this.handleClose}
                        >
                            Close Background Color
                        </CloseButton>
                    ) : (
                        <OpenButton
                            className="Color-picker-button color-picker-dynamic-open-button"
                            data-cy={`${dataCy}-background-open-button`}
                            onClick={this.handleClick}
                        >
                            Change Background Color
                        </OpenButton>
                    )}
                    {this.state.displayColorPicker ? (
                        <Popover
                            className="color-picker-popover color-picker-dynamic-popover"
                            data-cy={`color-picker-dynamic-popover`}
                        >
                            <Cover className="color-picker-dynamic-cover">
                                <SketchPicker
                                    color={this.state.color}
                                    onChange={this.handleChange}
                                    className="text-color-picker-swatch"
                                    presetColors={presetColors}
                                    width={'300px'}
                                />
                            </Cover>
                        </Popover>
                    ) : null}
                    <ChildContainer
                        className="color-picker-dynamic-child-container"
                        data-cy={`${dataCy}-child-container`}
                        style={styles.color}
                    >
                        {children}
                    </ChildContainer>
                </Container>
            </ParentContainer>
        );
    }
}

const Container = styled.div``;
const ParentContainer = styled.div``;
const ChildContainer = styled.div``;
const OpenButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 3rem;
    width: 20rem;
    background-color: transparent;
    border: 4px solid #ff581f;
    background-color: #082347;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 500;
    border-radius: 2rem;
    margin: 0 0 1rem;
    transition: 120ms ease-in-out;
    &:hover {
        cursor: pointer;
        background-color: #ff581f;
        border: 4px solid #ffffff;
    }
`;
const CloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 3rem;
    width: 20rem;
    background-color: #ff581f;
    border: 4px solid #ffffff;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 500;
    border-radius: 2rem;
    /* padding: 0.5rem 1.5rem; */
    margin: 0 0 1rem;
    transition: 120ms ease-in-out;
    &:hover {
        cursor: pointer;
        background-color: #082347;
        border: 4px solid #ff581f;
    }
`;

const Popover = styled.div`
    position: 'absolute';
    z-index: '2';
`;

const Cover = styled.div`
    position: 'fixed';
    top: '0px';
    right: '0px';
    bottom: '0px';
    left: '0px';
`;

export default ColorPickerDynamic;
