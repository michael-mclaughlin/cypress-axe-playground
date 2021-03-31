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

class ColorPickerAuroraText extends React.Component<Props> {
    state = {
        displayColorPicker: false,
        color: {
            r: 255,
            g: 90,
            b: 31,
            a: 1,
        },
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker });
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false });
    };

    handleChange = (color: any) => {
        this.setState({ color: color.rgb });
    };

    handleSaveFontColor = () => {
        const { color } = this.state;
        localStorage.setItem('color', `${color.r}, ${color.g}, ${color.b}, ${color.a}`);
    };

    render() {
        const styles = reactCSS({
            default: {
                color: {
                    borderRadius: '0.25rem',
                    color: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
                },
            },
        });
        const { children, id, className, dataCy } = this.props;
        return (
            <ParentContainer
                className="color-picker-parent-container"
                style={styles.color}
                data-cy="text-color-picker-parent-container"
            >
                <Container
                    className={`text-color-picker-container ${className}`}
                    id={id}
                    data-cy={dataCy}
                >
                    {this.state.displayColorPicker ? (
                        <CloseButton
                            className="Color-picker-button color-picker-aurora-text-button color-picker-aurora-text-close-button"
                            data-cy={`${dataCy}-font-close-button`}
                            onClick={this.handleClose}
                        >
                            Close Font Color
                        </CloseButton>
                    ) : (
                        <OpenButton
                            className="Color-picker-button color-picker-aurora-text-button color-picker-aurora-text-open-button"
                            data-cy={`${dataCy}-font-open-button`}
                            onClick={this.handleClick}
                        >
                            Change Font Color
                        </OpenButton>
                    )}
                    {this.state.displayColorPicker ? (
                        <Popover
                            className="color-picker-popover color-picker-aurora-text-popover"
                            data-cy="color-picker-aurora-text-popover"
                        >
                            <Cover
                                className="color-picker-aurora-text-cover"
                                data-cy="color-picker-aurora-text-cover"
                            >
                                <SketchPicker
                                    color={this.state.color}
                                    onChange={this.handleChange}
                                    onChangeComplete={this.handleSaveFontColor}
                                    className="text-color-picker-swatch"
                                    presetColors={presetColors}
                                    width={'300px'}
                                />
                            </Cover>
                        </Popover>
                    ) : null}
                </Container>
                <ChildContainer
                    className="color-picker-aurora-text-child-container"
                    data-cy={`${dataCy}-child-container`}
                    style={styles.color}
                >
                    {children}
                </ChildContainer>
            </ParentContainer>
        );
    }
}

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
    padding: 0.5rem 1.5rem;
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
    padding: 0.5rem 1.5rem;
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

const ParentContainer = styled.div``;

const Container = styled.div`
    & .color-picker-sketch {
        height: 14.5rem;
        & > div {
            position: absolute !important;
            width: 300px !important;
            > div {
                height: 4rem;
            }
        }
        & .flexbox-fix:nth-child(2) {
            top: 5rem;
            width: 300px !important;
        }
        & .flexbox-fix:nth-child(3) {
            top: 7rem;
            width: 300px !important;
        }
        & .flexbox-fix:nth-child(4) {
            top: 10rem;
            padding: 0 !important;
            border: none !important;
            margin: 0 !important;
            width: 316px !important;
        }
    }
`;

const ChildContainer = styled.div``;

export default ColorPickerAuroraText;
